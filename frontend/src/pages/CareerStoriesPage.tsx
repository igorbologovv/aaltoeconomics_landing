import { useEffect, useState } from "react";
import type { CareerStory } from "../types/careerStories";
import type { SiteContent } from "../types/siteContent";

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
  const [siteContent, setSiteContent] = useState<SiteContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPageData = async () => {
      try {
        const [storiesResponse, siteContentResponse] = await Promise.all([
          fetch(`${API_URL}/api/career-stories`),
          fetch(`${API_URL}/api/site-content`),
        ]);

        if (!storiesResponse.ok) {
          throw new Error("Failed to load career stories");
        }

        if (!siteContentResponse.ok) {
          throw new Error("Failed to load site content");
        }

        const storiesData = (await storiesResponse.json()) as CareerStory[];
        const siteContentData = (await siteContentResponse.json()) as SiteContent;

        setStories(storiesData);
        setSiteContent(siteContentData);
      } catch (error) {
        console.error("Failed to load career stories page data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void loadPageData();
  }, []);

  return (
    <>
      <CareerStoriesHeroSection />
      <CareerStoriesIntroSection />
      <CareerStoriesGridSection stories={stories} isLoading={isLoading} />
      <CareerShareSection content={siteContent?.careerStories.shareSection} />
    </>
  );
}

export default CareerStoriesPage;