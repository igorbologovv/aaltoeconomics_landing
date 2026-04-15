import ContactPageHeaderSection from "../components/contact/ContactPageHeaderSection";
import ContactIntroSection from "../components/contact/ContactIntroSection";
import ContactTeamGridSection from "../components/contact/ContactTeamGridSection";

import "../styles/contact/contact-page-header.css";
import "../styles/contact/contact-intro.css";
import "../styles/contact/contact-team-grid.css";

function ContactPage() {
  return (
    <>
      <ContactPageHeaderSection />
      <ContactIntroSection />
      <ContactTeamGridSection />
    </>
  );
}

export default ContactPage;