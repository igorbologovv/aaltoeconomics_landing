import type { ContactPerson } from "../../data/contactPeople";

const API_URL = import.meta.env.VITE_API_URL;

type ContactPersonCardProps = {
  person: ContactPerson;
  variant?: "default" | "large" | "solo";
};

function ContactPersonCard({
  person,
  variant = "default",
}: ContactPersonCardProps) {
  const imageSrc = person.image.startsWith("/uploads")
    ? `${API_URL}${person.image}`
    : person.image;

  const className =
    variant === "large"
      ? "contact-person-card contact-person-card--large"
      : variant === "solo"
      ? "contact-person-card contact-person-card--solo"
      : "contact-person-card";

  return (
    <article className={className}>
      <div className="contact-person-card__image-wrap">
        <img
          className="contact-person-card__image"
          src={imageSrc}
          alt={person.name}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
      </div>

      <div className="contact-person-card__content">
        <h3>{person.name}</h3>
        <a
          href={`mailto:${person.email}`}
          className="contact-person-card__email"
        >
          {person.email}
        </a>
      </div>
    </article>
  );
}

export default ContactPersonCard;