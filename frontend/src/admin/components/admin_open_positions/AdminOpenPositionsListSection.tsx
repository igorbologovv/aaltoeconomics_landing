type OpenPositionListItem = {
  id: string;
  title: string;
  company: string;
};

type AdminOpenPositionsListSectionProps = {
  positions: OpenPositionListItem[];
  selectedId: string;
  onSelect: (id: string) => void;
};

function AdminOpenPositionsListSection({
  positions,
  selectedId,
  onSelect,
}: AdminOpenPositionsListSectionProps) {
  return (
    <section className="admin-open-positions-list">
      <div className="admin-open-positions-list__head">
        <h2>Positions</h2>
        <span>{positions.length}</span>
      </div>

      <div className="admin-open-positions-list__items">
        {positions.map((position) => (
          <button
            key={position.id}
            type="button"
            className={
              position.id === selectedId
                ? "admin-open-positions-list__item admin-open-positions-list__item--active"
                : "admin-open-positions-list__item"
            }
            onClick={() => onSelect(position.id)}
          >
            <strong>{position.title || "Untitled position"}</strong>
            <span>{position.company || "No company"}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default AdminOpenPositionsListSection;