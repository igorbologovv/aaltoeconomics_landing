import { useEffect, useState } from "react";
import type { SiteContent } from "../types/siteContent";

import AlumniHeroSection from "../components/alumni/AlumniHeroSection";
import AlumniSocialSection from "../components/alumni/AlumniSocialSection";
import AlumniOpportunitiesSection from "../components/alumni/AlumniOpportunitiesSection";

import "../styles/alumni/alumni-hero.css";
import "../styles/alumni/alumni-social.css";
import "../styles/alumni/alumni-opportunities.css";

const API_URL = import.meta.env.VITE_API_URL;

function AlumniPage() {
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
      <AlumniHeroSection />
      <AlumniSocialSection content={content?.alumni.socialSection} />
      <AlumniOpportunitiesSection content={content?.alumni.opportunitiesSection} />
    </>
  );
}

export default AlumniPage;