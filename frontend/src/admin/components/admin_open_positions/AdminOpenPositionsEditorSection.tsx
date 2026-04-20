import { useState } from "react";
import type { OpenPosition } from "../../../types/openPositions";

const API_URL = import.meta.env.VITE_API_URL;

type AdminOpenPositionsEditorSectionProps = {
  selectedPosition: OpenPosition | null;
  onUpdateField: <K extends keyof OpenPosition>(
    key: K,
    value: OpenPosition[K]
  ) => void;
  onDelete: () => void;
  onSave: () => void;
};

function AdminOpenPositionsEditorSection({
  selectedPosition,
  onUpdateField,
  onDelete,
  onSave,
}: AdminOpenPositionsEditorSectionProps) {
  const [isUploadingLogo, setIsUploadingLogo] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  if (!selectedPosition) {
    return (
      <section className="admin-open-positions-editor admin-open-positions-editor--empty">
        <h2>No position selected</h2>
        <p>Create a new one to start editing.</p>
      </section>
    );
  }

  const logoSrc =
    selectedPosition.logo && selectedPosition.logo.startsWith("/uploads")
      ? `${API_URL}${selectedPosition.logo}`
      : selectedPosition.logo || "";

  const handleLogoUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadMessage("");
    setIsUploadingLogo(true);

    try {
      const token = localStorage.getItem("adminToken");
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`${API_URL}/api/admin/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to upload logo.");
      }

      onUpdateField("logo", data.url ?? "");
      setUploadMessage("Logo uploaded successfully.");
      event.target.value = "";
    } catch (error) {
      setUploadMessage(
        error instanceof Error ? error.message : "Failed to upload logo."
      );
      event.target.value = "";
    } finally {
      setIsUploadingLogo(false);
    }
  };

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

      <div className="admin-open-positions-editor__field">
        <span>Logo</span>

        <div className="admin-open-positions-editor__logo-actions">
          <label className="admin-open-positions-editor__upload-button">
            <input
              type="file"
              accept="image/png,image/jpeg,image/jpg,image/webp"
              onChange={handleLogoUpload}
              hidden
            />
            {isUploadingLogo ? "Uploading..." : "Upload logo"}
          </label>

          {selectedPosition.logo ? (
            <button
              type="button"
              className="admin-open-positions-editor__danger-button"
              onClick={() => {
                onUpdateField("logo", "");
                setUploadMessage("");
              }}
            >
              Remove logo
            </button>
          ) : null}
        </div>

        {uploadMessage ? (
          <p className="admin-open-positions-editor__upload-message">
            {uploadMessage}
          </p>
        ) : null}

        {logoSrc ? (
          <div className="admin-open-positions-editor__logo-preview">
            <img
              src={logoSrc}
              alt={selectedPosition.company || selectedPosition.title}
            />
          </div>
        ) : null}
      </div>

      <label className="admin-open-positions-editor__field">
        <span>Summary</span>
        <textarea
          rows={4}
          value={selectedPosition.summary}
          onChange={(event) => onUpdateField("summary", event.target.value)}
        />
      </label>

      <label className="admin-open-positions-editor__field">
        <span>Description</span>
        <textarea
          rows={10}
          value={selectedPosition.description}
          onChange={(event) => onUpdateField("description", event.target.value)}
        />
      </label>

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