import { useEffect, useState } from "react";
import type { CareerStory } from "../types/careerStories";

import CareerStoriesHeroSection from "../components/career_stories/CareerStoriesHeroSection";
import CareerStoriesIntroSection from "../components/career_stories/CareerStoriesIntroSection";
import CareerStoriesGridSection from "../components/career_stories/CareerStoriesGridSection";
import CareerShareSection from "../components/career_stories/CareerShareSection";

import "../styles/career_stories/career-stories-hero.css";
import "../styles/career_stories/career-stories-intro.css";
import "../styles/career_stories/career-stories-grid.css";
import "../styles/career_stories/career-share-section.css";

const API_URL = import.meta.env.VITE_API_URL;

function CareerStoriesPage() {
  const [stories, setStories] = useState<CareerStory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStories = async () => {
      try {
        const response = await fetch(`${API_URL}/api/career-stories`);

        if (!response.ok) {
          throw new Error("Failed to load career stories");
        }

        const data = (await response.json()) as CareerStory[];
        setStories(data);
      } catch (error) {
        console.error("Failed to load career stories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void loadStories();
  }, []);

  return (
    <>
      <CareerStoriesHeroSection />
      <CareerStoriesIntroSection />
      <CareerStoriesGridSection stories={stories} isLoading={isLoading} />
      <CareerShareSection />
    </>
  );
}

export default CareerStoriesPage;