import { useMemo, useState } from "react";
import {
  membershipApplications as initialMembershipApplications,
  type MembershipApplication,
  type MembershipApplicationStatus,
} from "../../data/membershipApplications";

import AdminMembershipApplicationsHeaderSection from "../components/admin_membership_applications/AdminMembershipApplicationsHeaderSection";
import AdminMembershipApplicationsListSection from "../components/admin_membership_applications/AdminMembershipApplicationsListSection";
import AdminMembershipApplicationsDetailsSection from "../components/admin_membership_applications/AdminMembershipApplicationsDetailsSection";

import "../styles/admin_membership_applications/admin-membership-applications-header.css";
import "../styles/admin_membership_applications/admin-membership-applications-list.css";
import "../styles/admin_membership_applications/admin-membership-applications-details.css";

function AdminMembershipApplicationsPage() {
  const [applications, setApplications] = useState<MembershipApplication[]>(
    [...initialMembershipApplications]
  );

  const [selectedId, setSelectedId] = useState<string>(
    applications[0]?.id ?? ""
  );

  const [isEmailListVisible, setIsEmailListVisible] = useState(false);
  const [emailFilter, setEmailFilter] = useState<
    "all" | MembershipApplicationStatus
  >("accepted");

  const selectedApplication = useMemo(
    () =>
      applications.find((application) => application.id === selectedId) ?? null,
    [applications, selectedId]
  );

  const filteredEmails = useMemo(() => {
    const filteredApplications =
      emailFilter === "all"
        ? applications
        : applications.filter(
            (application) => application.status === emailFilter
          );

    return Array.from(
      new Set(
        filteredApplications
          .map((application) => application.email.trim())
          .filter(Boolean)
      )
    );
  }, [applications, emailFilter]);

  const handleStatusChange = (status: MembershipApplicationStatus) => {
    if (!selectedApplication) return;

    setApplications((current) =>
      current.map((application) =>
        application.id === selectedApplication.id
          ? { ...application, status }
          : application
      )
    );
  };

  const handleDeleteApplication = () => {
    if (!selectedApplication) return;

    const confirmed = window.confirm(
      `Delete application from ${selectedApplication.firstName} ${selectedApplication.lastName}?`
    );

    if (!confirmed) return;

    const nextApplications = applications.filter(
      (application) => application.id !== selectedApplication.id
    );

    setApplications(nextApplications);
    setSelectedId(nextApplications[0]?.id ?? "");
  };

  const handleCopyEmails = async () => {
    const text = filteredEmails.join("\n");

    if (!text) {
      window.alert("No emails available for the selected filter.");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      window.alert("Emails copied in column format.");
    } catch {
      window.alert("Could not copy emails.");
    }
  };

  return (
    <>
      <AdminMembershipApplicationsHeaderSection
        count={applications.length}
        emails={filteredEmails}
        emailFilter={emailFilter}
        isEmailListVisible={isEmailListVisible}
        onToggleEmailList={() => setIsEmailListVisible((current) => !current)}
        onChangeEmailFilter={setEmailFilter}
        onCopyEmails={handleCopyEmails}
      />

      <div className="admin-membership-applications-layout">
        <AdminMembershipApplicationsListSection
          applications={applications}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <AdminMembershipApplicationsDetailsSection
          application={selectedApplication}
          onStatusChange={handleStatusChange}
          onDelete={handleDeleteApplication}
        />
      </div>
    </>
  );
}

export default AdminMembershipApplicationsPage;