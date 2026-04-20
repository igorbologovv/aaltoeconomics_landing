type AdminOpenPositionsHeaderSectionProps = {
  onAddNew: () => void;
};

function AdminOpenPositionsHeaderSection({
  onAddNew,
}: AdminOpenPositionsHeaderSectionProps) {
  return (
    <section className="admin-open-positions-header">
      <div className="admin-open-positions-header__content">
        <h1>Open Positions</h1>
        <p>Manage job listings, deadlines, links, logos, and publishing state.</p>
      </div>

      <button
        type="button"
        className="admin-open-positions-header__button"
        onClick={onAddNew}
      >
        Add new
      </button>
    </section>
  );
}

export default AdminOpenPositionsHeaderSection;