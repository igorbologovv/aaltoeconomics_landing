import { useEffect, useMemo, useState } from "react";
import type { OpenPosition } from "../../types/openPositions";

import AdminOpenPositionsHeaderSection from "../components/admin_open_positions/AdminOpenPositionsHeaderSection";
import AdminOpenPositionsListSection from "../components/admin_open_positions/AdminOpenPositionsListSection";
import AdminOpenPositionsEditorSection from "../components/admin_open_positions/AdminOpenPositionsEditorSection";

import "../styles/admin_open_positions/admin-open-positions-header.css";
import "../styles/admin_open_positions/admin-open-positions-list.css";
import "../styles/admin_open_positions/admin-open-positions-editor.css";

const API_URL = import.meta.env.VITE_API_URL;

function createEmptyPosition(nextOrder: number): OpenPosition {
  return {
    id: crypto.randomUUID(),
    title: "",
    company: "",
    type: "",
    location: "",
    deadline: "",
    summary: "",
    description: "",
    logo: "",
    applyUrl: "",
    isPublished: false,
    order: nextOrder,
  };
}

function AdminOpenPositionsPage() {
  const [positions, setPositions] = useState<OpenPosition[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    const loadPositions = async () => {
      try {
        setErrorMessage("");
        setSaveMessage("");

        const token = localStorage.getItem("adminToken");

        const response = await fetch(`${API_URL}/api/admin/open-positions`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const rawText = await response.text();
        const data = rawText ? JSON.parse(rawText) : [];

        if (!response.ok) {
          throw new Error(data?.message || "Failed to load open positions.");
        }

        if (!Array.isArray(data)) {
          throw new Error("Invalid open positions response.");
        }

        setPositions(data);
        setSelectedId(data[0]?.id ?? "");
      } catch (error) {
        setErrorMessage(
          error instanceof Error ? error.message : "Failed to load open positions."
        );
      } finally {
        setIsLoading(false);
      }
    };

    void loadPositions();
  }, []);

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

    setSaveMessage("");
  };

  const handleAddNew = () => {
    const nextOrder =
      positions.length > 0
        ? Math.max(...positions.map((position) => position.order)) + 1
        : 1;

    const newPosition = createEmptyPosition(nextOrder);

    setPositions((current) => [...current, newPosition]);
    setSelectedId(newPosition.id);
    setSaveMessage("");
  };

  const handleDelete = async () => {
    if (!selectedPosition) return;

    const confirmed = window.confirm(
      `Delete position "${selectedPosition.title || "Untitled position"}"?`
    );

    if (!confirmed) return;

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `${API_URL}/api/admin/open-positions/${selectedPosition.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        let message = "Failed to delete open position.";

        try {
          const data = await response.json();
          message = data?.message || message;
        } catch {
          // ignore
        }

        throw new Error(message);
      }

      const nextPositions = positions.filter(
        (position) => position.id !== selectedPosition.id
      );

      setPositions(nextPositions);
      setSelectedId(nextPositions[0]?.id ?? "");
      setSaveMessage("Position deleted.");
    } catch (error) {
      window.alert(
        error instanceof Error ? error.message : "Failed to delete open position."
      );
    }
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(`${API_URL}/api/admin/open-positions`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(positions),
      });

      const rawText = await response.text();
      const data = rawText ? JSON.parse(rawText) : null;

      if (!response.ok) {
        throw new Error(
          (data && typeof data === "object" && "message" in data && data.message) ||
            "Failed to save open positions."
        );
      }

      if (Array.isArray(data)) {
        setPositions(data);
        setSelectedId((current) => current || data[0]?.id || "");
      }

      setSaveMessage("Open positions saved successfully.");
    } catch (error) {
      window.alert(
        error instanceof Error ? error.message : "Failed to save open positions."
      );
    }
  };

  if (isLoading) {
    return (
      <section className="admin-open-positions-page-state">
        <div className="container">
          <h1>Loading open positions...</h1>
        </div>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section className="admin-open-positions-page-state">
        <div className="container">
          <h1>Could not load open positions</h1>
          <p>{errorMessage}</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <AdminOpenPositionsHeaderSection onAddNew={handleAddNew} />

      <div className="admin-open-positions-layout">
        <AdminOpenPositionsListSection
          positions={positions}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <div>
          {saveMessage ? (
            <p className="admin-open-positions-page__save-message">
              {saveMessage}
            </p>
          ) : null}

          <AdminOpenPositionsEditorSection
            selectedPosition={selectedPosition}
            onUpdateField={updateSelectedPosition}
            onDelete={handleDelete}
            onSave={handleSave}
          />
        </div>
      </div>
    </>
  );
}

export default AdminOpenPositionsPage;