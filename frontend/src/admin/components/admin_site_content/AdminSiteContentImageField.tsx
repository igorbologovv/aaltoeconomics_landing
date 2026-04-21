import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

type AdminSiteContentImageFieldProps = {
  label: string;
  image: string;
  alt: string;
  onChange: (value: string) => void;
};

function AdminSiteContentImageField({
  label,
  image,
  alt,
  onChange,
}: AdminSiteContentImageFieldProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState("");

  const imageSrc = image.startsWith("/uploads") ? `${API_URL}${image}` : image;

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setMessage("");
    setIsUploading(true);

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
        throw new Error(data?.message || "Failed to upload image.");
      }

      onChange(data.url ?? "");
      setMessage("Image uploaded successfully.");
      event.target.value = "";
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Failed to upload image."
      );
      event.target.value = "";
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="admin-site-content-image-field">
      <span className="admin-site-content-image-field__label">{label}</span>

      <div className="admin-site-content-image-field__actions">
        <label className="admin-site-content-image-field__upload-button">
          <input
            type="file"
            accept="image/png,image/jpeg,image/jpg,image/webp"
            onChange={handleUpload}
            hidden
          />
          {isUploading ? "Uploading..." : "Upload image"}
        </label>

        {image ? (
          <button
            type="button"
            className="admin-site-content-image-field__remove-button"
            onClick={() => {
              onChange("");
              setMessage("");
            }}
          >
            Remove image
          </button>
        ) : null}
      </div>

      {message ? (
        <p className="admin-site-content-image-field__message">{message}</p>
      ) : null}

      {image ? (
        <div className="admin-site-content-image-field__preview">
          <img src={imageSrc} alt={alt || label} />
        </div>
      ) : null}
    </div>
  );
}

export default AdminSiteContentImageField;