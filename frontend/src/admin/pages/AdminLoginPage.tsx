import { useMemo, useState } from "react";
import {
  contactPeople as initialContactPeople,
  type ContactPerson,
} from "../../data/contactPeople";

import AdminContactHeaderSection from "../components/admin_contact/AdminContactHeaderSection";
import AdminContactListSection from "../components/admin_contact/AdminContactListSection";
import AdminContactEditorSection from "../components/admin_contact/AdminContactEditorSection";

import "../styles/admin_contact/admin-contact-header.css";
import "../styles/admin_contact/admin-contact-list.css";
import "../styles/admin_contact/admin-contact-editor.css";

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
  const [people, setPeople] = useState<ContactPerson[]>([...initialContactPeople]);
  const [selectedId, setSelectedId] = useState<string>(people[0]?.id ?? "");

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

  const handleDelete = () => {
    if (!selectedPerson) return;

    const confirmed = window.confirm(
      `Delete contact "${selectedPerson.name || "Untitled contact"}"?`
    );

    if (!confirmed) return;

    const nextPeople = people.filter((person) => person.id !== selectedPerson.id);

    setPeople(nextPeople);
    setSelectedId(nextPeople[0]?.id ?? "");
  };

  const handleSave = () => {
    console.log("Current contact people:", people);
    window.alert("Saved locally for now. Backend comes next.");
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