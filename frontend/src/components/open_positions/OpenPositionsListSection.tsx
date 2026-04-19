import OpenPositionCard from "./OpenPositionCard";
import { openPositions } from "../../data/openPositions";

function OpenPositionsListSection() {
  const visiblePositions = openPositions
    .filter((position) => position.isPublished)
    .sort((a, b) => a.order - b.order);

  return (
    <section className="open-positions-list-section">
      <div className="container">
        <div className="open-positions-list">
          {visiblePositions.map((position) => (
            <OpenPositionCard key={position.id} position={position} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OpenPositionsListSection;