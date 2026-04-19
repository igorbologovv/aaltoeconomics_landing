type CareerStoryListItem = {
  id: string;
  name: string;
  role: string;
};

type AdminCareerStoriesListSectionProps = {
  stories: CareerStoryListItem[];
  selectedId: string;
  onSelect: (id: string) => void;
};

function AdminCareerStoriesListSection({
  stories,
  selectedId,
  onSelect,
}: AdminCareerStoriesListSectionProps) {
  return (
    <section className="admin-career-stories-list">
      <div className="admin-career-stories-list__head">
        <h2>Stories</h2>
        <span>{stories.length}</span>
      </div>

      <div className="admin-career-stories-list__items">
        {stories.map((story) => (
          <button
            key={story.id}
            type="button"
            className={
              story.id === selectedId
                ? "admin-career-stories-list__item admin-career-stories-list__item--active"
                : "admin-career-stories-list__item"
            }
            onClick={() => onSelect(story.id)}
          >
            <strong>{story.name || "Untitled story"}</strong>
            <span>{story.role || "No role"}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default AdminCareerStoriesListSection;