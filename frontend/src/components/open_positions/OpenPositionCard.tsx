import type { OpenPosition } from "../../types/openPositions";

const API_URL = import.meta.env.VITE_API_URL;

type OpenPositionCardProps = {
  position: OpenPosition;
};

function OpenPositionCard({ position }: OpenPositionCardProps) {
  const logoSrc =
    position.logo && position.logo.startsWith("/uploads")
      ? `${API_URL}${position.logo}`
      : position.logo || "";

  const descriptionParagraphs = position.description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <article className="open-position-card">
      {logoSrc ? (
        <div className="open-position-card__logo-wrap">
          <img
            className="open-position-card__logo"
            src={logoSrc}
            alt={position.company}
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="open-position-card__content">
        <h2>
          {position.company}: {position.title}
        </h2>

        <div className="open-position-card__meta">
          <span>{position.type}</span>
          <span>{position.location}</span>
          <span>DL: {position.deadline}</span>
        </div>

        <p className="open-position-card__summary">{position.summary}</p>

        <div className="open-position-card__description">
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <a
          className="primary-btn"
          href={position.applyUrl}
          target={position.applyUrl.startsWith("http") ? "_blank" : undefined}
          rel={position.applyUrl.startsWith("http") ? "noreferrer" : undefined}
        >
          Read more
        </a>
      </div>
    </article>
  );
}

export default OpenPositionCard;