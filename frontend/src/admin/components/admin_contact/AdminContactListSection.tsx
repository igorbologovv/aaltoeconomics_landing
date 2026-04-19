type ContactListItem = {
  id: string;
  name: string;
  role: string;
};

type AdminContactListSectionProps = {
  people: ContactListItem[];
  selectedId: string;
  onSelect: (id: string) => void;
};

function AdminContactListSection({
  people,
  selectedId,
  onSelect,
}: AdminContactListSectionProps) {
  return (
    <section className="admin-contact-list">
      <div className="admin-contact-list__head">
        <h2>People</h2>
        <span>{people.length}</span>
      </div>

      <div className="admin-contact-list__items">
        {people.map((person) => (
          <button
            key={person.id}
            type="button"
            className={
              person.id === selectedId
                ? "admin-contact-list__item admin-contact-list__item--active"
                : "admin-contact-list__item"
            }
            onClick={() => onSelect(person.id)}
          >
            <strong>{person.name || "Untitled contact"}</strong>
            <span>{person.role || "No role"}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default AdminContactListSection;