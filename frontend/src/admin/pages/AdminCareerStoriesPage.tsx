import { useEffect, useMemo, useState } from "react";
import type { CareerStory } from "../../types/careerStories";

import AdminCareerStoriesHeaderSection from "../components/admin_career_stories/AdminCareerStoriesHeaderSection";
import AdminCareerStoriesListSection from "../components/admin_career_stories/AdminCareerStoriesListSection";
import AdminCareerStoriesEditorSection from "../components/admin_career_stories/AdminCareerStoriesEditorSection";

import "../styles/admin_career_stories/admin-career-stories-header.css";
import "../styles/admin_career_stories/admin-career-stories-list.css";
import "../styles/admin_career_stories/admin-career-stories-editor.css";

const API_URL = import.meta.env.VITE_API_URL;

function slugify(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeStory(story: CareerStory): CareerStory {
  return {
    ...story,
    slug: story.slug?.trim() || slugify(story.name),
    order: story.order ?? 0,
  };
}

function createEmptyStory(nextOrder: number): CareerStory {
  return {
    id: crypto.randomUUID(),
    slug: "",
    name: "",
    role: "",
    image: "",
    text: "",
    order: nextOrder,
  };
}

function AdminCareerStoriesPage() {
  const [stories, setStories] = useState<CareerStory[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const selectedStory = useMemo(
    () => stories.find((story) => story.id === selectedId) ?? null,
    [stories, selectedId]
  );

  useEffect(() => {
    const loadStories = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const response = await fetch(`${API_URL}/api/admin/career-stories`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to load career stories");
        }

        const data = (await response.json()) as CareerStory[];

        const normalizedStories = data
          .map(normalizeStory)
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

        setStories(normalizedStories);
        setSelectedId(normalizedStories[0]?.id ?? "");
      } catch (error) {
        console.error(error);
        window.alert("Failed to load career stories.");
      } finally {
        setIsLoading(false);
      }
    };

    void loadStories();
  }, []);

  const updateSelectedStory = <K extends keyof CareerStory>(
    key: K,
    value: CareerStory[K]
  ) => {
    if (!selectedStory) return;

    setStories((current) =>
      current.map((story) => {
        if (story.id !== selectedStory.id) {
          return story;
        }

        const nextStory = { ...story, [key]: value };

        if (key === "name") {
          const nextName = String(value ?? "");
          const currentSlug = story.slug.trim();
          const generatedFromCurrentName = slugify(story.name);

          if (!currentSlug || currentSlug === generatedFromCurrentName) {
            nextStory.slug = slugify(nextName);
          }
        }

        return nextStory;
      })
    );
  };

  const handleAddNew = () => {
    const nextOrder =
      stories.length > 0
        ? Math.max(...stories.map((story) => story.order ?? 0)) + 1
        : 1;

    const newStory = createEmptyStory(nextOrder);

    setStories((current) => [...current, newStory]);
    setSelectedId(newStory.id);
  };

  const handleDelete = async () => {
    if (!selectedStory) return;

    const confirmed = window.confirm(
      `Delete story "${selectedStory.name || "Untitled story"}"?`
    );

    if (!confirmed) return;

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `${API_URL}/api/admin/career-stories/${selectedStory.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message ?? "Failed to delete story");
      }

      const nextStories = stories.filter(
        (story) => story.id !== selectedStory.id
      );

      setStories(nextStories);
      setSelectedId(nextStories[0]?.id ?? "");
    } catch (error) {
      console.error(error);
      window.alert("Failed to delete story.");
    }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);

      const token = localStorage.getItem("adminToken");

      const sanitizedStories = stories.map((story) => ({
        ...story,
        slug: story.slug?.trim() || slugify(story.name),
      }));

      const response = await fetch(`${API_URL}/api/admin/career-stories`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(sanitizedStories),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message ?? "Failed to save stories");
      }

      setStories(
        sanitizedStories.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      );

      window.alert("Career stories saved successfully.");
    } catch (error) {
      console.error(error);
      window.alert(
        error instanceof Error ? error.message : "Failed to save stories."
      );
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div style={{ padding: "32px" }}>Loading career stories...</div>;
  }

  return (
    <>
      <AdminCareerStoriesHeaderSection onAddNew={handleAddNew} />

      <div className="admin-career-stories-layout">
        <AdminCareerStoriesListSection
          stories={stories}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <AdminCareerStoriesEditorSection
          selectedStory={selectedStory}
          onUpdateField={updateSelectedStory}
          onDelete={handleDelete}
          onSave={handleSave}
        />
      </div>

      {isSaving ? (
        <div style={{ padding: "0 32px 32px", color: "#5f6b7a" }}>
          Saving...
        </div>
      ) : null}
    </>
  );
}

export default AdminCareerStoriesPage;