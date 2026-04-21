type AdminSiteContentHeaderSectionProps = {
  onSave: () => void;
  isSaving: boolean;
};

function AdminSiteContentHeaderSection({
  onSave,
  isSaving,
}: AdminSiteContentHeaderSectionProps) {
  return (
    <section className="admin-site-content-header">
      <div className="admin-site-content-header__content">
        <h1>Site Content</h1>
        <p>Manage homepage texts and images, excluding the hero section.</p>
      </div>

      <button
        type="button"
        className="admin-site-content-header__button"
        onClick={onSave}
        disabled={isSaving}
      >
        {isSaving ? "Saving..." : "Save"}
      </button>
    </section>
  );
}

export default AdminSiteContentHeaderSection;