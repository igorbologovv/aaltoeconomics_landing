import ForCompaniesHeroSection from "../components/for_companies/ForCompaniesHeroSection";
import CompaniesRecruitmentSection from "../components/for_companies/CompaniesRecruitmentSection";
import CompaniesResultsSection from "../components/for_companies/CompaniesResultsSection";

import "../styles/for_companies/for-companies-hero.css";
import "../styles/for_companies/companies-recruitment.css";
import "../styles/for_companies/companies-results.css";

function ForCompaniesPage() {
  return (
    <>
      <ForCompaniesHeroSection />
      <CompaniesRecruitmentSection />
      <CompaniesResultsSection />
    </>
  );
}

export default ForCompaniesPage;