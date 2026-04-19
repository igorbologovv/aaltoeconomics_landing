import type { OpenPosition } from "../../data/openPositions";

type OpenPositionCardProps = {
  position: OpenPosition;
};

function OpenPositionCard({ position }: OpenPositionCardProps) {
  return (
    <article className="open-position-card">
      <div className="open-position-card__logo-wrap">
        <img
          className="open-position-card__logo"
          src={position.logo}
          alt={position.company}
        />
      </div>

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
          {position.description.map((paragraph, index) => (
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