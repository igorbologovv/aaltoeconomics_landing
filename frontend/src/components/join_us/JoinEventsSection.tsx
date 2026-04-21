import { Link } from "react-router-dom";
import type { SiteContent } from "../../types/siteContent";

type JoinEventsSectionProps = {
  content?: SiteContent["joinUs"]["eventsSection"];
};

const API_URL = import.meta.env.VITE_API_URL;

function JoinEventsSection({ content }: JoinEventsSectionProps) {
  if (!content) return null;

  const imageSmallTop = content.imageSmallTop.startsWith("/uploads")
    ? `${API_URL}${content.imageSmallTop}`
    : content.imageSmallTop;

  const imageLarge = content.imageLarge.startsWith("/uploads")
    ? `${API_URL}${content.imageLarge}`
    : content.imageLarge;

  const imageSmallBottom = content.imageSmallBottom.startsWith("/uploads")
    ? `${API_URL}${content.imageSmallBottom}`
    : content.imageSmallBottom;

  return (
    <section className="join-events">
      <div className="container join-events__grid">
        <div className="join-events__text">
          <p className="section-label">{content.label}</p>
          <h2>{content.title}</h2>

          <p>{content.paragraphOne}</p>
          <p>{content.paragraphTwo}</p>

          <div className="join-events__button-row">
            <Link to={content.buttonHref} className="primary-btn">
              {content.buttonText}
            </Link>
          </div>
        </div>

        <div className="join-events__mosaic">
          <div className="join-events__image-card join-events__image-card--small-top">
            <img
              className="join-events__image"
              src={imageSmallTop}
              alt={content.imageSmallTopAlt}
              loading="lazy"
            />
          </div>

          <div className="join-events__image-card join-events__image-card--large">
            <img
              className="join-events__image"
              src={imageLarge}
              alt={content.imageLargeAlt}
              loading="lazy"
            />
          </div>

          <div className="join-events__image-card join-events__image-card--small-bottom">
            <img
              className="join-events__image"
              src={imageSmallBottom}
              alt={content.imageSmallBottomAlt}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinEventsSection;