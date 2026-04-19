import ContactPageHeaderSection from "../components/contact/ContactPageHeaderSection";
import ContactTeamGridSection from "../components/contact/ContactTeamGridSection";

import "../styles/contact/contact-page-header.css";
import "../styles/contact/contact-team-grid.css";

function ContactPage() {
  return (
    <>
      <ContactPageHeaderSection />
      <ContactTeamGridSection />
    </>
  );
}

export default ContactPage;