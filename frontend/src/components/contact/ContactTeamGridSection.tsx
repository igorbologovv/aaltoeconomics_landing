import ContactPersonCard from "./ContactPersonCard";
import { contactPeople } from "../../data/contactPeople";

function ContactTeamGridSection() {
  return (
    <section className="contact-team-grid-section">
      <div className="container">
        <div className="contact-team-grid">
          {contactPeople.map((person) => (
            <ContactPersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactTeamGridSection;