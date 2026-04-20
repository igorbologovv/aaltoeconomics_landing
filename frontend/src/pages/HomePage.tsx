import { useEffect, useState } from "react";
import type { SiteContent } from "../types/siteContent";
import HomeHero from "../components/home/HomeHero";
import AboutSection from "../components/home/AboutSection";
import ActivitiesSection from "../components/home/ActivitiesSection";
import AboutMosaicSection from "../components/home/AboutMosaicSection";
import CTASection from "../components/home/CTASection";
import "../styles/home/home-layout.css";
import "../styles/home/hero.css";
import "../styles/home/about-section.css";
import "../styles/home/activities-section.css";
import "../styles/home/about-mosaic.css";
import "../styles/home/cta-section.css";

const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
  const [content, setContent] = useState<SiteContent | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(`${API_URL}/api/site-content`);
        if (!response.ok) {
          throw new Error("Failed to load site content.");
        }
        const data = (await response.json()) as SiteContent;
        setContent(data);
      } catch (error) {
        console.error(error);
        setContent(null);
      }
    };

    void loadContent();
  }, []);

  return (
    <>
      <HomeHero />
      <AboutSection content={content?.home.aboutSection} />
      <ActivitiesSection content={content?.home.activitiesSection} />
      <AboutMosaicSection content={content?.home.aboutMosaicSection} />
      <CTASection content={content?.home.ctaSection} />
    </>
  );
}

export default HomePage;