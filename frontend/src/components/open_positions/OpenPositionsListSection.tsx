import { useEffect, useState } from "react";
import type { OpenPosition } from "../../types/openPositions";
import OpenPositionCard from "./OpenPositionCard";

const API_URL = import.meta.env.VITE_API_URL;

function OpenPositionsListSection() {
  const [positions, setPositions] = useState<OpenPosition[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPositions = async () => {
      try {
        const response = await fetch(`${API_URL}/api/open-positions`);

        if (!response.ok) {
          throw new Error("Failed to load open positions.");
        }

        const data = (await response.json()) as OpenPosition[];
        setPositions(data);
      } catch (error) {
        console.error(error);
        setPositions([]);
      } finally {
        setIsLoading(false);
      }
    };

    void loadPositions();
  }, []);

  if (isLoading) {
    return (
      <section className="open-positions-list-section">
        <div className="container">
          <p>Loading open positions...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="open-positions-list-section">
      <div className="container">
        {positions.length > 0 ? (
          <div className="open-positions-list">
            {positions.map((position) => (
              <OpenPositionCard key={position.id} position={position} />
            ))}
          </div>
        ) : (
          <div className="open-positions-list-section__empty">
            <p>No open positions at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default OpenPositionsListSection;