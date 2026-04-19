import type { CareerStory, StoryVariant } from "../../../data/careerStories";

type AdminCareerStoriesEditorSectionProps = {
  selectedStory: CareerStory | null;
  onUpdateField: <K extends keyof CareerStory>(
    key: K,
    value: CareerStory[K]
  ) => void;
  onContentChange: (index: number, value: string) => void;
  onAddParagraph: () => void;
  onRemoveParagraph: (index: number) => void;
  onDelete: () => void;
  onSave: () => void;
};

const variantOptions: StoryVariant[] = ["default", "large", "wide"];

function AdminCareerStoriesEditorSection({
  selectedStory,
  onUpdateField,
  onContentChange,
  onAddParagraph,
  onRemoveParagraph,
  onDelete,
  onSave,
}: AdminCareerStoriesEditorSectionProps) {
  if (!selectedStory) {
    return (
      <section className="admin-career-stories-editor admin-career-stories-editor--empty">
        <h2>No story selected</h2>
        <p>Create a new one to start editing.</p>
      </section>
    );
  }

  return (
    <section className="admin-career-stories-editor">
      <div className="admin-career-stories-editor__grid">
        <label className="admin-career-stories-editor__field">
          <span>Name</span>
          <input
            type="text"
            value={selectedStory.name}
            onChange={(event) => onUpdateField("name", event.target.value)}
          />
        </label>

        <label className="admin-career-stories-editor__field">
          <span>Role</span>
          <input
            type="text"
            value={selectedStory.role}
            onChange={(event) => onUpdateField("role", event.target.value)}
          />
        </label>

        <label className="admin-career-stories-editor__field">
          <span>Slug</span>
          <input
            type="text"
            value={selectedStory.slug}
            onChange={(event) => onUpdateField("slug", event.target.value)}
          />
        </label>

        <label className="admin-career-stories-editor__field">
          <span>Image URL</span>
          <input
            type="text"
            value={selectedStory.image}
            onChange={(event) => onUpdateField("image", event.target.value)}
          />
        </label>

        <label className="admin-career-stories-editor__field">
          <span>Variant</span>
          <select
            value={selectedStory.variant ?? "default"}
            onChange={(event) =>
              onUpdateField("variant", event.target.value as StoryVariant)
            }
          >
            {variantOptions.map((variant) => (
              <option key={variant} value={variant}>
                {variant}
              </option>
            ))}
          </select>
        </label>

        <label className="admin-career-stories-editor__field">
          <span>Order</span>
          <input
            type="number"
            value={selectedStory.order ?? 0}
            onChange={(event) =>
              onUpdateField("order", Number(event.target.value))
            }
          />
        </label>
      </div>

      <label className="admin-career-stories-editor__field">
        <span>Excerpt</span>
        <textarea
          rows={3}
          value={selectedStory.excerpt}
          onChange={(event) => onUpdateField("excerpt", event.target.value)}
        />
      </label>

      <div className="admin-career-stories-editor__field">
        <div className="admin-career-stories-editor__field-row">
          <span>Content paragraphs</span>

          <button
            type="button"
            className="admin-career-stories-editor__secondary-button"
            onClick={onAddParagraph}
          >
            Add paragraph
          </button>
        </div>

        <div className="admin-career-stories-editor__paragraphs">
          {selectedStory.content.map((paragraph, index) => (
            <div
              key={index}
              className="admin-career-stories-editor__paragraph-item"
            >
              <textarea
                rows={4}
                value={paragraph}
                onChange={(event) =>
                  onContentChange(index, event.target.value)
                }
              />

              <button
                type="button"
                className="admin-career-stories-editor__danger-button"
                onClick={() => onRemoveParagraph(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      <label className="admin-career-stories-editor__checkbox">
        <input
          type="checkbox"
          checked={selectedStory.isPublished ?? false}
          onChange={(event) =>
            onUpdateField("isPublished", event.target.checked)
          }
        />
        <span>Published</span>
      </label>

      <div className="admin-career-stories-editor__actions">
        <button
          type="button"
          className="admin-career-stories-editor__danger-button"
          onClick={onDelete}
        >
          Delete
        </button>

        <button
          type="button"
          className="admin-career-stories-editor__primary-button"
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </section>
  );
}

export default AdminCareerStoriesEditorSection;