import { useMemo, useState } from "react";
import {
  careerStories as initialCareerStories,
  type CareerStory,
  type StoryVariant,
} from "../../data/careerStories";

import AdminCareerStoriesHeaderSection from "../components/admin_career_stories/AdminCareerStoriesHeaderSection";
import AdminCareerStoriesListSection from "../components/admin_career_stories/AdminCareerStoriesListSection";
import AdminCareerStoriesEditorSection from "../components/admin_career_stories/AdminCareerStoriesEditorSection";

import "../styles/admin_career_stories/admin-career-stories-header.css";
import "../styles/admin_career_stories/admin-career-stories-list.css";
import "../styles/admin_career_stories/admin-career-stories-editor.css";

function normalizeStory(story: CareerStory): CareerStory {
  return {
    ...story,
    variant: story.variant ?? "default",
    isPublished: story.isPublished ?? false,
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
    excerpt: "",
    content: [""],
    variant: "default",
    isPublished: false,
    order: nextOrder,
  };
}

function AdminCareerStoriesPage() {
  const [stories, setStories] = useState<CareerStory[]>(
    [...initialCareerStories]
      .map(normalizeStory)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  );

  const [selectedId, setSelectedId] = useState<string>(stories[0]?.id ?? "");

  const selectedStory = useMemo(
    () => stories.find((story) => story.id === selectedId) ?? null,
    [stories, selectedId]
  );

  const updateSelectedStory = <K extends keyof CareerStory>(
    key: K,
    value: CareerStory[K]
  ) => {
    if (!selectedStory) return;

    setStories((current) =>
      current.map((story) =>
        story.id === selectedStory.id ? { ...story, [key]: value } : story
      )
    );
  };

  const handleContentChange = (index: number, value: string) => {
    if (!selectedStory) return;

    const nextContent = [...selectedStory.content];
    nextContent[index] = value;

    updateSelectedStory("content", nextContent);
  };

  const handleAddParagraph = () => {
    if (!selectedStory) return;
    updateSelectedStory("content", [...selectedStory.content, ""]);
  };

  const handleRemoveParagraph = (index: number) => {
    if (!selectedStory) return;

    const nextContent = selectedStory.content.filter(
      (_, itemIndex) => itemIndex !== index
    );

    updateSelectedStory("content", nextContent.length > 0 ? nextContent : [""]);
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

  const handleDelete = () => {
    if (!selectedStory) return;

    const confirmed = window.confirm(
      `Delete story "${selectedStory.name || "Untitled story"}"?`
    );

    if (!confirmed) return;

    const nextStories = stories.filter((story) => story.id !== selectedStory.id);

    setStories(nextStories);
    setSelectedId(nextStories[0]?.id ?? "");
  };

  const handleSave = () => {
    console.log("Current stories:", stories);
    window.alert("Saved locally for now. Backend comes next.");
  };

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
          onContentChange={handleContentChange}
          onAddParagraph={handleAddParagraph}
          onRemoveParagraph={handleRemoveParagraph}
          onDelete={handleDelete}
          onSave={handleSave}
        />
      </div>
    </>
  );
}

export default AdminCareerStoriesPage;