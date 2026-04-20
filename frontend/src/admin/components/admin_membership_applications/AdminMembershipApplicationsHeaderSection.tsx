import type { MembershipApplicationStatus } from "../../../types/membership";

type AdminMembershipApplicationsHeaderSectionProps = {
  count: number;
  emails: string[];
  emailFilter: "all" | MembershipApplicationStatus;
  isEmailListVisible: boolean;
  onToggleEmailList: () => void;
  onChangeEmailFilter: (value: "all" | MembershipApplicationStatus) => void;
  onCopyEmails: () => void;
};

function AdminMembershipApplicationsHeaderSection({
  count,
  emails,
  emailFilter,
  isEmailListVisible,
  onToggleEmailList,
  onChangeEmailFilter,
  onCopyEmails,
}: AdminMembershipApplicationsHeaderSectionProps) {
  return (
    <section className="admin-membership-applications-header">
      <div className="admin-membership-applications-header__top">
        <div className="admin-membership-applications-header__content">
          <h1>Membership Applications</h1>
          <p>Review incoming join requests and update their status.</p>
        </div>

        <div className="admin-membership-applications-header__actions">
          <div className="admin-membership-applications-header__badge">
            {count} applications
          </div>

          <button
            type="button"
            className="admin-membership-applications-header__button"
            onClick={onToggleEmailList}
          >
            {isEmailListVisible ? "Hide email list" : "Show email list"}
          </button>
        </div>
      </div>

      {isEmailListVisible ? (
        <div className="admin-membership-applications-header__emails-card">
          <div className="admin-membership-applications-header__emails-top">
            <div className="admin-membership-applications-header__emails-head">
              <h2>Email list</h2>
              <span>{emails.length}</span>
            </div>

            <div className="admin-membership-applications-header__emails-controls">
              <select
                value={emailFilter}
                onChange={(event) =>
                  onChangeEmailFilter(
                    event.target.value as "all" | MembershipApplicationStatus
                  )
                }
                className="admin-membership-applications-header__select"
              >
                <option value="accepted">Accepted</option>
                <option value="all">All</option>
                <option value="new">New</option>
                <option value="reviewed">Reviewed</option>
                <option value="rejected">Rejected</option>
              </select>

              <button
                type="button"
                className="admin-membership-applications-header__button"
                onClick={onCopyEmails}
              >
                Copy emails
              </button>
            </div>
          </div>

          {emails.length > 0 ? (
            <div className="admin-membership-applications-header__emails-column">
              {emails.map((email) => (
                <div
                  key={email}
                  className="admin-membership-applications-header__email-row"
                >
                  {email}
                </div>
              ))}
            </div>
          ) : (
            <p className="admin-membership-applications-header__empty">
              No emails available for the selected filter.
            </p>
          )}
        </div>
      ) : null}
    </section>
  );
}

export default AdminMembershipApplicationsHeaderSection;