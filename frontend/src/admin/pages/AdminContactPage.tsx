import { useEffect, useMemo, useState } from "react";
import type { ContactPerson } from "../../data/contactPeople";

import AdminContactHeaderSection from "../components/admin_contact/AdminContactHeaderSection";
import AdminContactListSection from "../components/admin_contact/AdminContactListSection";
import AdminContactEditorSection from "../components/admin_contact/AdminContactEditorSection";

import "../styles/admin_contact/admin-contact-header.css";
import "../styles/admin_contact/admin-contact-list.css";
import "../styles/admin_contact/admin-contact-editor.css";

const API_URL = import.meta.env.VITE_API_URL;

function createEmptyContactPerson(): ContactPerson {
  return {
    id: crypto.randomUUID(),
    name: "",
    role: "",
    email: "",
    image: "",
  };
}

function AdminContactPage() {
  const [people, setPeople] = useState<ContactPerson[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");

  useEffect(() => {
    fetch(`${API_URL}/api/contact-people`)
      .then((res) => res.json())
      .then((data) => {
        setPeople(data);
        setSelectedId(data[0]?.id ?? "");
      })
      .catch((err) => {
        console.error("Failed to load contacts", err);
      });
  }, []);

  const selectedPerson = useMemo(
    () => people.find((person) => person.id === selectedId) ?? null,
    [people, selectedId]
  );

  const updateSelectedPerson = <K extends keyof ContactPerson>(
    key: K,
    value: ContactPerson[K]
  ) => {
    if (!selectedPerson) return;

    setPeople((current) =>
      current.map((person) =>
        person.id === selectedPerson.id ? { ...person, [key]: value } : person
      )
    );
  };

  const handleAddNew = () => {
    const newPerson = createEmptyContactPerson();
    setPeople((current) => [...current, newPerson]);
    setSelectedId(newPerson.id);
  };

  const handleDelete = async () => {
    if (!selectedPerson) return;

    const confirmed = window.confirm(
      `Delete contact "${selectedPerson.name || "Untitled contact"}"?`
    );

    if (!confirmed) return;

    try {
      const isUnsavedNewPerson = !people.some(
        (person) => person.id === selectedPerson.id && person.name && person.email
      );

      if (!isUnsavedNewPerson) {
        const response = await fetch(
          `${API_URL}/api/admin/contact-people/${selectedPerson.id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Delete failed");
        }
      }

      const nextPeople = people.filter((person) => person.id !== selectedPerson.id);
      setPeople(nextPeople);
      setSelectedId(nextPeople[0]?.id ?? "");
    } catch (error) {
      console.error("Delete failed:", error);
      window.alert("Delete failed ❌");
    }
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`${API_URL}/api/admin/contact-people`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(people),
      });

      if (!response.ok) {
        throw new Error("Save failed");
      }

      window.alert("Saved to backend ✅");
    } catch (error) {
      console.error("Save failed:", error);
      window.alert("Save failed ❌");
    }
  };

  return (
    <>
      <AdminContactHeaderSection onAddNew={handleAddNew} />

      <div className="admin-contact-layout">
        <AdminContactListSection
          people={people}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <AdminContactEditorSection
          selectedPerson={selectedPerson}
          onUpdateField={updateSelectedPerson}
          onDelete={handleDelete}
          onSave={handleSave}
        />
      </div>
    </>
  );
}

export default AdminContactPage;