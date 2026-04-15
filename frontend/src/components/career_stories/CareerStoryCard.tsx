import { Link } from "react-router-dom";

type CareerStoryCardProps = {
  name: string;
  role: string;
  image: string;
  to: string;
  variant?: "default" | "large" | "wide";
};

function CareerStoryCard({
  name,
  role,
  image,
  to,
  variant = "default",
}: CareerStoryCardProps) {
  return (
    <Link
      to={to}
      className={`career-story-card career-story-card--${variant}`}
      aria-label={`Read story of ${name}`}
    >
      <img className="career-story-card__image" src={image} alt={name} />

      <div className="career-story-card__overlay" />

      <div className="career-story-card__content">
        <p className="career-story-card__name">{name}</p>
        <p className="career-story-card__role">{role}</p>
        <span className="career-story-card__cta">Read story</span>
      </div>
    </Link>
  );
}

export default CareerStoryCard;