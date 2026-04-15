import type { ContactPerson } from "../../data/contactPeople";

type ContactPersonCardProps = {
  person: ContactPerson;
};

function ContactPersonCard({ person }: ContactPersonCardProps) {
  return (
    <article className="contact-person-card">
      <div className="contact-person-card__image-wrap">
        <img
          className="contact-person-card__image"
          src={person.image}
          alt={person.name}
        />
      </div>

      <div className="contact-person-card__content">
        <h3>{person.name}</h3>
        <p className="contact-person-card__role">{person.role}</p>
        <a href={`mailto:${person.email}`} className="contact-person-card__email">
          {person.email}
        </a>
      </div>
    </article>
  );
}

export default ContactPersonCard;