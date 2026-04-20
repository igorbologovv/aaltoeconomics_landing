import { useState } from "react";
import type { CareerStory } from "../../../types/careerStories";

type AdminCareerStoriesEditorSectionProps = {
  selectedStory: CareerStory | null;
  onUpdateField: <K extends keyof CareerStory>(
    key: K,
    value: CareerStory[K]
  ) => void;
  onDelete: () => void;
  onSave: () => void;
};

const API_URL = import.meta.env.VITE_API_URL;

function AdminCareerStoriesEditorSection({
  selectedStory,
  onUpdateField,
  onDelete,
  onSave,
}: AdminCareerStoriesEditorSectionProps) {
  const [isUploading, setIsUploading] = useState(false);

  if (!selectedStory) {
    return (
      <section className="admin-career-stories-editor admin-career-stories-editor--empty">
        <h2>No story selected</h2>
        <p>Create a new one to start editing.</p>
      </section>
    );
  }

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);

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

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message ?? "Failed to upload image");
      }

      const imageUrl =
        data?.url ?? data?.imageUrl ?? data?.path ?? data?.fileUrl;

      if (!imageUrl || typeof imageUrl !== "string") {
        throw new Error("Upload succeeded but no image URL was returned");
      }

      onUpdateField("image", imageUrl);
    } catch (error) {
      console.error(error);
      window.alert(
        error instanceof Error ? error.message : "Failed to upload image."
      );
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  };

  const previewImageSrc = selectedStory.image
    ? selectedStory.image.startsWith("/uploads")
      ? `${API_URL}${selectedStory.image}`
      : selectedStory.image
    : "";

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
          <span>Order</span>
          <input
            type="number"
            value={selectedStory.order ?? 0}
            onChange={(event) =>
              onUpdateField("order", Number(event.target.value))
            }
          />
        </label>

        <div className="admin-career-stories-editor__field admin-career-stories-editor__field--full">
          <span>Image</span>

          {selectedStory.image ? (
            <div className="admin-career-stories-editor__image-preview">
              <img
                src={previewImageSrc}
                alt={selectedStory.name || "Story preview"}
              />

              <button
                type="button"
                className="admin-career-stories-editor__secondary-button admin-career-stories-editor__image-remove"
                onClick={() => onUpdateField("image", "")}
              >
                Remove image
              </button>
            </div>
          ) : null}

          <input
            type="file"
            accept="image/png,image/jpeg,image/jpg,image/webp"
            onChange={handleImageUpload}
            disabled={isUploading}
          />

          <small>
            {isUploading
              ? "Uploading..."
              : selectedStory.image
                ? "Image uploaded successfully."
                : "Choose an image file"}
          </small>
        </div>
      </div>

      <label className="admin-career-stories-editor__field">
        <span>Text</span>
        <textarea
          rows={12}
          value={selectedStory.text}
          onChange={(event) => onUpdateField("text", event.target.value)}
        />
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