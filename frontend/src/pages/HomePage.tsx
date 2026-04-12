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

function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <ActivitiesSection />
      <AboutMosaicSection />
      <CTASection />
    </>
  );
}

export default HomePage;