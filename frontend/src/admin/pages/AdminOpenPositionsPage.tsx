import { useMemo, useState } from "react";
import { openPositions as initialOpenPositions } from "../../data/openPositions";

import AdminOpenPositionsHeaderSection from "../components/admin_open_positions/AdminOpenPositionsHeaderSection";
import AdminOpenPositionsListSection from "../components/admin_open_positions/AdminOpenPositionsListSection";
import AdminOpenPositionsEditorSection from "../components/admin_open_positions/AdminOpenPositionsEditorSection";

import "../styles/admin_open_positions/admin-open-positions-header.css";
import "../styles/admin_open_positions/admin-open-positions-list.css";
import "../styles/admin_open_positions/admin-open-positions-editor.css";

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

function createEmptyPosition(nextOrder: number): OpenPosition {
  return {
    id: crypto.randomUUID(),
    title: "",
    company: "",
    type: "",
    location: "",
    deadline: "",
    summary: "",
    description: [""],
    logo: "",
    applyUrl: "",
    isPublished: false,
    order: nextOrder,
  };
}

function AdminOpenPositionsPage() {
  const [positions, setPositions] = useState<OpenPosition[]>(
    [...initialOpenPositions].sort((a, b) => a.order - b.order)
  );

  const [selectedId, setSelectedId] = useState<string>(positions[0]?.id ?? "");

  const selectedPosition = useMemo(
    () => positions.find((position) => position.id === selectedId) ?? null,
    [positions, selectedId]
  );

  const updateSelectedPosition = <K extends keyof OpenPosition>(
    key: K,
    value: OpenPosition[K]
  ) => {
    if (!selectedPosition) return;

    setPositions((current) =>
      current.map((position) =>
        position.id === selectedPosition.id
          ? { ...position, [key]: value }
          : position
      )
    );
  };

  const handleDescriptionChange = (index: number, value: string) => {
    if (!selectedPosition) return;

    const nextDescription = [...selectedPosition.description];
    nextDescription[index] = value;

    updateSelectedPosition("description", nextDescription);
  };

  const handleAddBullet = () => {
    if (!selectedPosition) return;
    updateSelectedPosition("description", [...selectedPosition.description, ""]);
  };

  const handleRemoveBullet = (index: number) => {
    if (!selectedPosition) return;

    const nextDescription = selectedPosition.description.filter(
      (_, itemIndex) => itemIndex !== index
    );

    updateSelectedPosition(
      "description",
      nextDescription.length > 0 ? nextDescription : [""]
    );
  };

  const handleAddNew = () => {
    const nextOrder =
      positions.length > 0
        ? Math.max(...positions.map((position) => position.order)) + 1
        : 1;

    const newPosition = createEmptyPosition(nextOrder);

    setPositions((current) => [...current, newPosition]);
    setSelectedId(newPosition.id);
  };

  const handleDelete = () => {
    if (!selectedPosition) return;

    const confirmed = window.confirm(
      `Delete position "${selectedPosition.title || "Untitled position"}"?`
    );

    if (!confirmed) return;

    const nextPositions = positions.filter(
      (position) => position.id !== selectedPosition.id
    );

    setPositions(nextPositions);
    setSelectedId(nextPositions[0]?.id ?? "");
  };

  const handleSave = () => {
    console.log("Current positions:", positions);
    window.alert("Saved locally for now. Backend comes next.");
  };

  return (
    <>
      <AdminOpenPositionsHeaderSection onAddNew={handleAddNew} />

      <div className="admin-open-positions-layout">
        <AdminOpenPositionsListSection
          positions={positions}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <AdminOpenPositionsEditorSection
          selectedPosition={selectedPosition}
          onUpdateField={updateSelectedPosition}
          onDescriptionChange={handleDescriptionChange}
          onAddBullet={handleAddBullet}
          onRemoveBullet={handleRemoveBullet}
          onDelete={handleDelete}
          onSave={handleSave}
        />
      </div>
    </>
  );
}

export default AdminOpenPositionsPage;