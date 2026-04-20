import { useEffect, useMemo, useState } from "react";
import type {
  MembershipApplication,
  MembershipApplicationStatus,
} from "../../types/membership";

import AdminMembershipApplicationsHeaderSection from "../components/admin_membership_applications/AdminMembershipApplicationsHeaderSection";
import AdminMembershipApplicationsListSection from "../components/admin_membership_applications/AdminMembershipApplicationsListSection";
import AdminMembershipApplicationsDetailsSection from "../components/admin_membership_applications/AdminMembershipApplicationsDetailsSection";

import "../styles/admin_membership_applications/admin-membership-applications-header.css";
import "../styles/admin_membership_applications/admin-membership-applications-list.css";
import "../styles/admin_membership_applications/admin-membership-applications-details.css";

const API_URL = import.meta.env.VITE_API_URL;

function AdminMembershipApplicationsPage() {
  const [applications, setApplications] = useState<MembershipApplication[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [isEmailListVisible, setIsEmailListVisible] = useState(false);
  const [emailFilter, setEmailFilter] = useState<
    "all" | MembershipApplicationStatus
  >("accepted");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadApplications = async () => {
      try {
        setErrorMessage("");

        const token = localStorage.getItem("adminToken");

        const response = await fetch(
          `${API_URL}/api/admin/membership-applications`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || "Failed to load applications.");
        }

        setApplications(data);
        setSelectedId((current) => current || data[0]?.id || "");
      } catch (error) {
        setErrorMessage(
          error instanceof Error ? error.message : "Failed to load applications."
        );
      } finally {
        setIsLoading(false);
      }
    };

    void loadApplications();
  }, []);

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

  const handleStatusChange = async (status: MembershipApplicationStatus) => {
    if (!selectedApplication) return;

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `${API_URL}/api/admin/membership-applications/${selectedApplication.id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to update application status.");
      }

      setApplications((current) =>
        current.map((application) =>
          application.id === selectedApplication.id ? data : application
        )
      );
    } catch (error) {
      window.alert(
        error instanceof Error
          ? error.message
          : "Failed to update application status."
      );
    }
  };

  const handleDeleteApplication = async () => {
    if (!selectedApplication) return;

    const confirmed = window.confirm(
      `Delete application from ${selectedApplication.firstName} ${selectedApplication.lastName}?`
    );

    if (!confirmed) return;

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `${API_URL}/api/admin/membership-applications/${selectedApplication.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        let message = "Failed to delete application.";

        try {
          const data = await response.json();
          message = data?.message || message;
        } catch {
          // ignore
        }

        throw new Error(message);
      }

      const nextApplications = applications.filter(
        (application) => application.id !== selectedApplication.id
      );

      setApplications(nextApplications);
      setSelectedId(nextApplications[0]?.id ?? "");
    } catch (error) {
      window.alert(
        error instanceof Error ? error.message : "Failed to delete application."
      );
    }
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

  if (isLoading) {
    return (
      <section className="admin-membership-applications-page-state">
        <div className="container">
          <h1>Loading applications...</h1>
        </div>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section className="admin-membership-applications-page-state">
        <div className="container">
          <h1>Could not load applications</h1>
          <p>{errorMessage}</p>
        </div>
      </section>
    );
  }

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