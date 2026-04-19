type OpenPosition = {
  id: string;
  title: string;
  company: string;
  type: string;
  location: string;
  deadline: string;
  summary: string;
  description: string[];
  logo?: string;
  applyUrl: string;
  isPublished: boolean;
  order: number;
};

type AdminOpenPositionsEditorSectionProps = {
  selectedPosition: OpenPosition | null;
  onUpdateField: <K extends keyof OpenPosition>(
    key: K,
    value: OpenPosition[K]
  ) => void;
  onDescriptionChange: (index: number, value: string) => void;
  onAddBullet: () => void;
  onRemoveBullet: (index: number) => void;
  onDelete: () => void;
  onSave: () => void;
};

function AdminOpenPositionsEditorSection({
  selectedPosition,
  onUpdateField,
  onDescriptionChange,
  onAddBullet,
  onRemoveBullet,
  onDelete,
  onSave,
}: AdminOpenPositionsEditorSectionProps) {
  if (!selectedPosition) {
    return (
      <section className="admin-open-positions-editor admin-open-positions-editor--empty">
        <h2>No position selected</h2>
        <p>Create a new one to start editing.</p>
      </section>
    );
  }

  return (
    <section className="admin-open-positions-editor">
      <div className="admin-open-positions-editor__grid">
        <label className="admin-open-positions-editor__field">
          <span>Title</span>
          <input
            type="text"
            value={selectedPosition.title}
            onChange={(event) => onUpdateField("title", event.target.value)}
          />
        </label>

        <label className="admin-open-positions-editor__field">
          <span>Company</span>
          <input
            type="text"
            value={selectedPosition.company}
            onChange={(event) => onUpdateField("company", event.target.value)}
          />
        </label>

        <label className="admin-open-positions-editor__field">
          <span>Type</span>
          <input
            type="text"
            value={selectedPosition.type}
            onChange={(event) => onUpdateField("type", event.target.value)}
          />
        </label>

        <label className="admin-open-positions-editor__field">
          <span>Location</span>
          <input
            type="text"
            value={selectedPosition.location}
            onChange={(event) => onUpdateField("location", event.target.value)}
          />
        </label>

        <label className="admin-open-positions-editor__field">
          <span>Deadline</span>
          <input
            type="text"
            value={selectedPosition.deadline}
            onChange={(event) => onUpdateField("deadline", event.target.value)}
          />
        </label>

        <label className="admin-open-positions-editor__field">
          <span>Apply URL</span>
          <input
            type="text"
            value={selectedPosition.applyUrl}
            onChange={(event) => onUpdateField("applyUrl", event.target.value)}
          />
        </label>

        <label className="admin-open-positions-editor__field">
          <span>Logo URL</span>
          <input
            type="text"
            value={selectedPosition.logo ?? ""}
            onChange={(event) => onUpdateField("logo", event.target.value)}
          />
        </label>

        <label className="admin-open-positions-editor__field">
          <span>Order</span>
          <input
            type="number"
            value={selectedPosition.order}
            onChange={(event) =>
              onUpdateField("order", Number(event.target.value))
            }
          />
        </label>
      </div>

      <label className="admin-open-positions-editor__field">
        <span>Summary</span>
        <textarea
          rows={4}
          value={selectedPosition.summary}
          onChange={(event) => onUpdateField("summary", event.target.value)}
        />
      </label>

      <div className="admin-open-positions-editor__field">
        <div className="admin-open-positions-editor__field-row">
          <span>Description bullets</span>

          <button
            type="button"
            className="admin-open-positions-editor__secondary-button"
            onClick={onAddBullet}
          >
            Add bullet
          </button>
        </div>

        <div className="admin-open-positions-editor__bullets">
          {selectedPosition.description.map((item, index) => (
            <div
              key={index}
              className="admin-open-positions-editor__bullet-item"
            >
              <textarea
                rows={3}
                value={item}
                onChange={(event) =>
                  onDescriptionChange(index, event.target.value)
                }
              />

              <button
                type="button"
                className="admin-open-positions-editor__danger-button"
                onClick={() => onRemoveBullet(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      <label className="admin-open-positions-editor__checkbox">
        <input
          type="checkbox"
          checked={selectedPosition.isPublished}
          onChange={(event) =>
            onUpdateField("isPublished", event.target.checked)
          }
        />
        <span>Published</span>
      </label>

      <div className="admin-open-positions-editor__actions">
        <button
          type="button"
          className="admin-open-positions-editor__danger-button"
          onClick={onDelete}
        >
          Delete
        </button>

        <button
          type="button"
          className="admin-open-positions-editor__primary-button"
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </section>
  );
}

export default AdminOpenPositionsEditorSection;