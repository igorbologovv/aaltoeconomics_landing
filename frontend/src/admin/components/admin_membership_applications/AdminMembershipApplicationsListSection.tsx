import type { MembershipApplication } from "../../../types/membership";

type AdminMembershipApplicationsListSectionProps = {
  applications: MembershipApplication[];
  selectedId: string;
  onSelect: (id: string) => void;
};

function AdminMembershipApplicationsListSection({
  applications,
  selectedId,
  onSelect,
}: AdminMembershipApplicationsListSectionProps) {
  return (
    <section className="admin-membership-applications-list">
      <div className="admin-membership-applications-list__head">
        <h2>Applications</h2>
      </div>

      <div className="admin-membership-applications-list__items">
        {applications.map((application) => (
          <button
            key={application.id}
            type="button"
            className={
              application.id === selectedId
                ? "admin-membership-applications-list__item admin-membership-applications-list__item--active"
                : "admin-membership-applications-list__item"
            }
            onClick={() => onSelect(application.id)}
          >
            <div className="admin-membership-applications-list__item-top">
              <strong>
                {application.firstName} {application.lastName}
              </strong>
              <span
                className={`admin-membership-applications-list__status admin-membership-applications-list__status--${application.status}`}
              >
                {application.status}
              </span>
            </div>

            <span>{application.major}</span>
            <span>{application.email}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default AdminMembershipApplicationsListSection;