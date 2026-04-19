import JoinApplicationHeroSection from "../components/join_application/JoinApplicationHeroSection";
import JoinApplicationFormSection from "../components/join_application/JoinApplicationFormSection";

import "../styles/join_application/join-application-hero.css";
import "../styles/join_application/join-application-form.css";

function JoinApplicationPage() {
  return (
    <>
      <JoinApplicationHeroSection />
      <JoinApplicationFormSection />
    </>
  );
}

export default JoinApplicationPage;