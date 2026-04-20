import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

type CareerStoryCardProps = {
  name: string;
  role: string;
  image: string;
  to: string;
};

function CareerStoryCard({
  name,
  role,
  image,
  to,
}: CareerStoryCardProps) {
  const imageSrc = image.startsWith("/uploads") ? `${API_URL}${image}` : image;

  return (
    <Link
      to={to}
      className="career-story-card career-story-card--default"
      aria-label={`Read story of ${name}`}
    >
      <img className="career-story-card__image" src={imageSrc} alt={name} />

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