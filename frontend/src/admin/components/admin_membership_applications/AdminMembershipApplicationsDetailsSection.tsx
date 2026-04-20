import type {
  MembershipApplication,
  MembershipApplicationStatus,
} from "../../../types/membership";

type AdminMembershipApplicationsDetailsSectionProps = {
  application: MembershipApplication | null;
  onStatusChange: (status: MembershipApplicationStatus) => void;
  onDelete: () => void;
};

function formatBooleanValue(value: boolean) {
  return value ? "Yes" : "No";
}

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function AdminMembershipApplicationsDetailsSection({
  application,
  onStatusChange,
  onDelete,
}: AdminMembershipApplicationsDetailsSectionProps) {
  if (!application) {
    return (
      <section className="admin-membership-applications-details admin-membership-applications-details--empty">
        <h2>No application selected</h2>
        <p>Select an application from the list to view details.</p>
      </section>
    );
  }

  return (
    <section className="admin-membership-applications-details">
      <div className="admin-membership-applications-details__header">
        <h2>
          {application.firstName} {application.lastName}
        </h2>
        <span
          className={`admin-membership-applications-details__status admin-membership-applications-details__status--${application.status}`}
        >
          {application.status}
        </span>
      </div>

      <div className="admin-membership-applications-details__grid">
        <div className="admin-membership-applications-details__field">
          <span>Email</span>
          <strong>{application.email}</strong>
        </div>

        <div className="admin-membership-applications-details__field">
          <span>City</span>
          <strong>{application.city}</strong>
        </div>

        <div className="admin-membership-applications-details__field">
          <span>School</span>
          <strong>{application.school}</strong>
        </div>

        <div className="admin-membership-applications-details__field">
          <span>Major</span>
          <strong>{application.major}</strong>
        </div>

        <div className="admin-membership-applications-details__field">
          <span>Submitted</span>
          <strong>{formatDate(application.createdAt)}</strong>
        </div>

        <div className="admin-membership-applications-details__field">
          <span>KY membership</span>
          <strong>{formatBooleanValue(application.kyMembership)}</strong>
        </div>

        <div className="admin-membership-applications-details__field">
          <span>AYY membership</span>
          <strong>{formatBooleanValue(application.ayyMembership)}</strong>
        </div>

        <div className="admin-membership-applications-details__field">
          <span>Consent accepted</span>
          <strong>{formatBooleanValue(application.consentAccepted)}</strong>
        </div>
      </div>

      <div className="admin-membership-applications-details__actions">
        <button
          type="button"
          className="admin-membership-applications-details__secondary-button"
          onClick={() => onStatusChange("reviewed")}
        >
          Mark reviewed
        </button>

        <button
          type="button"
          className="admin-membership-applications-details__accept-button"
          onClick={() => onStatusChange("accepted")}
        >
          Accept
        </button>

        <button
          type="button"
          className="admin-membership-applications-details__reject-button"
          onClick={() => onStatusChange("rejected")}
        >
          Reject
        </button>

        <button
          type="button"
          className="admin-membership-applications-details__delete-button"
          onClick={onDelete}
        >
          Delete application
        </button>
      </div>
    </section>
  );
}

export default AdminMembershipApplicationsDetailsSection;