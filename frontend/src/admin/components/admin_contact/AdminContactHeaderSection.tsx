type AdminContactHeaderSectionProps = {
  onAddNew: () => void;
};

function AdminContactHeaderSection({
  onAddNew,
}: AdminContactHeaderSectionProps) {
  return (
    <section className="admin-contact-header">
      <div className="admin-contact-header__content">
        <h1>Contact People</h1>
        <p>Manage board members, roles, emails, and profile images.</p>
      </div>

      <button
        type="button"
        className="admin-contact-header__button"
        onClick={onAddNew}
      >
        Add new
      </button>
    </section>
  );
}

export default AdminContactHeaderSection;