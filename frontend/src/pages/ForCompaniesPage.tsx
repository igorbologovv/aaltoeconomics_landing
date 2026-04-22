import { useEffect, useState } from "react";
import type { SiteContent } from "../types/siteContent";

import ForCompaniesHeroSection from "../components/for_companies/ForCompaniesHeroSection";
import CompaniesRecruitmentSection from "../components/for_companies/CompaniesRecruitmentSection";
import CompaniesResultsSection from "../components/for_companies/CompaniesResultsSection";

import "../styles/for_companies/for-companies-hero.css";
import "../styles/for_companies/companies-recruitment.css";
import "../styles/for_companies/companies-results.css";

const API_URL = import.meta.env.VITE_API_URL;

function ForCompaniesPage() {
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
      <ForCompaniesHeroSection />
      <CompaniesRecruitmentSection content={content?.forCompanies.recruitmentSection} />
      <CompaniesResultsSection content={content?.forCompanies.resultsSection} />
    </>
  );
}

export default ForCompaniesPage;