import AlumniHeroSection from "../components/alumni/AlumniHeroSection";
import AlumniSocialSection from "../components/alumni/AlumniSocialSection";
import AlumniOpportunitiesSection from "../components/alumni/AlumniOpportunitiesSection";

import "../styles/alumni/alumni-hero.css";
import "../styles/alumni/alumni-social.css";
import "../styles/alumni/alumni-opportunities.css";

function AlumniPage() {
  return (
    <>
      <AlumniHeroSection />
      <AlumniSocialSection />
      <AlumniOpportunitiesSection />
    </>
  );
}

export default AlumniPage;