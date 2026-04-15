import CareerStoriesHeroSection from "../components/career_stories/CareerStoriesHeroSection";
import CareerStoriesIntroSection from "../components/career_stories/CareerStoriesIntroSection";
import CareerStoriesGridSection from "../components/career_stories/CareerStoriesGridSection";
import CareerShareSection from "../components/career_stories/CareerShareSection";

import "../styles/career_stories/career-stories-hero.css";
import "../styles/career_stories/career-stories-intro.css";
import "../styles/career_stories/career-stories-grid.css";
import "../styles/career_stories/career-share-section.css";

function CareerStoriesPage() {
  return (
    <>
      <CareerStoriesHeroSection />
      <CareerStoriesIntroSection />
      <CareerStoriesGridSection />
      <CareerShareSection />
    </>
  );
}

export default CareerStoriesPage;