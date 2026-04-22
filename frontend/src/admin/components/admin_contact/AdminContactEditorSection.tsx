import type { ContactPerson } from "../../../data/contactPeople";

const API_URL = import.meta.env.VITE_API_URL;

type AdminContactEditorSectionProps = {
  selectedPerson: ContactPerson | null;
  onUpdateField: <K extends keyof ContactPerson>(
    key: K,
    value: ContactPerson[K]
  ) => void;
  onDelete: () => void;
  onSave: () => void;
};

function AdminContactEditorSection({
  selectedPerson,
  onUpdateField,
  onDelete,
  onSave,
}: AdminContactEditorSectionProps) {
  const handleImageUpload = async (file: File) => {
    try {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        throw new Error("Admin token is missing. Please log in again.");
      }

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(`${API_URL}/api/admin/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        const rawText = await res.text();
        let message = "Upload failed";

        try {
          const data = rawText ? JSON.parse(rawText) : null;
          message = data?.message || data?.error || message;
        } catch {
          if (rawText) message = rawText;
        }

        throw new Error(message);
      }

      const data = await res.json();

      onUpdateField("image", data.url);
    } catch (err) {
      console.error("Upload failed", err);
      alert(err instanceof Error ? err.message : "Upload failed ❌");
    }
  };

  if (!selectedPerson) {
    return (
      <section className="admin-contact-editor admin-contact-editor--empty">
        <h2>No contact selected</h2>
        <p>Create a new one to start editing.</p>
      </section>
    );
  }

  const previewSrc = selectedPerson.image.startsWith("/uploads")
    ? `${API_URL}${selectedPerson.image}`
    : selectedPerson.image;

  return (
    <section className="admin-contact-editor">
      <div className="admin-contact-editor__grid">
        <label className="admin-contact-editor__field">
          <span>Name</span>
          <input
            type="text"
            value={selectedPerson.name}
            onChange={(event) => onUpdateField("name", event.target.value)}
          />
        </label>

        <label className="admin-contact-editor__field">
          <span>Role</span>
          <input
            type="text"
            value={selectedPerson.role}
            onChange={(event) => onUpdateField("role", event.target.value)}
          />
        </label>

        <label className="admin-contact-editor__field">
          <span>Email</span>
          <input
            type="text"
            value={selectedPerson.email}
            onChange={(event) => onUpdateField("email", event.target.value)}
          />
        </label>

        <div className="admin-contact-editor__field">
          <span>Image</span>

          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) {
                void handleImageUpload(file);
              }
            }}
          />

          {selectedPerson.image && (
            <img
              src={previewSrc}
              alt="preview"
              style={{
                marginTop: "10px",
                width: "120px",
                height: "120px",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          )}
        </div>
      </div>

      <div className="admin-contact-editor__actions">
        <button
          type="button"
          className="admin-contact-editor__danger-button"
          onClick={onDelete}
        >
          Delete
        </button>

        <button
          type="button"
          className="admin-contact-editor__primary-button"
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </section>
  );
}

export default AdminContactEditorSection;