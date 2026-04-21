import { useEffect, useState } from "react";
import type { SiteContent } from "../../types/siteContent";

import AdminSiteContentHeaderSection from "../components/admin_site_content/AdminSiteContentHeaderSection";
import AdminSiteContentHomeEditorSection from "../components/admin_site_content/AdminSiteContentHomeEditorSection";

import "../styles/admin_site_content/admin-site-content-header.css";
import "../styles/admin_site_content/admin-site-content-editor.css";

const API_URL = import.meta.env.VITE_API_URL;

function AdminSiteContentPage() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    const loadContent = async () => {
      try {
        setErrorMessage("");
        setSaveMessage("");

        const token = localStorage.getItem("adminToken");

        const response = await fetch(`${API_URL}/api/admin/site-content`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const rawText = await response.text();
        const data = rawText ? JSON.parse(rawText) : null;

        if (!response.ok) {
          throw new Error(data?.message || "Failed to load site content.");
        }

        setContent(data as SiteContent);
      } catch (error) {
        setErrorMessage(
          error instanceof Error ? error.message : "Failed to load site content."
        );
      } finally {
        setIsLoading(false);
      }
    };

    void loadContent();
  }, []);

  const updateContent = (updater: (current: SiteContent) => SiteContent) => {
    setContent((current) => {
      if (!current) return current;
      return updater(current);
    });
    setSaveMessage("");
    setErrorMessage("");
  };

  const handleSave = async () => {
    if (!content) return;

    try {
      setIsSaving(true);
      setErrorMessage("");
      setSaveMessage("");

      const token = localStorage.getItem("adminToken");

      const response = await fetch(`${API_URL}/api/admin/site-content`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(content),
      });

      const rawText = await response.text();
      const data = rawText ? JSON.parse(rawText) : null;

      if (!response.ok) {
        throw new Error(data?.message || "Failed to save site content.");
      }

      setContent(data as SiteContent);
      setSaveMessage("Site content saved successfully.");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to save site content."
      );
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <section className="admin-site-content-page-state">
        <div className="container">
          <h1>Loading site content...</h1>
        </div>
      </section>
    );
  }

  if (errorMessage && !content) {
    return (
      <section className="admin-site-content-page-state">
        <div className="container">
          <h1>Could not load site content</h1>
          <p>{errorMessage}</p>
        </div>
      </section>
    );
  }

  if (!content) {
    return null;
  }

  return (
    <>
      <AdminSiteContentHeaderSection
        onSave={handleSave}
        isSaving={isSaving}
      />

      <div className="admin-site-content-layout">
        <div className="container">
          {saveMessage ? (
            <p className="admin-site-content-page__save-message">{saveMessage}</p>
          ) : null}

          {errorMessage ? (
            <p className="admin-site-content-page__error-message">{errorMessage}</p>
          ) : null}

          <AdminSiteContentHomeEditorSection
            content={content}
            onChange={updateContent}
          />
        </div>
      </div>
    </>
  );
}

export default AdminSiteContentPage;