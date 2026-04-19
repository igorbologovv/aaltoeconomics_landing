type AdminCareerStoriesHeaderSectionProps = {
  onAddNew: () => void;
};

function AdminCareerStoriesHeaderSection({
  onAddNew,
}: AdminCareerStoriesHeaderSectionProps) {
  return (
    <section className="admin-career-stories-header">
      <div className="admin-career-stories-header__content">
        <h1>Career Stories</h1>
        <p>Manage alumni stories, detail content, order, and publishing state.</p>
      </div>

      <button
        type="button"
        className="admin-career-stories-header__button"
        onClick={onAddNew}
      >
        Add new
      </button>
    </section>
  );
}

export default AdminCareerStoriesHeaderSection;