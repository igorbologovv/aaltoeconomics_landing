import OpenPositionsHeroSection from "../components/open_positions/OpenPositionsHeroSection";
import OpenPositionsListSection from "../components/open_positions/OpenPositionsListSection";

import "../styles/open_positions/open-positions-hero.css";
import "../styles/open_positions/open-positions-list.css";

function OpenPositionsPage() {
  return (
    <>
      <OpenPositionsHeroSection />
      <OpenPositionsListSection />
    </>
  );
}

export default OpenPositionsPage;