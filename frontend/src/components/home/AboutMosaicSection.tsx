import { Link } from "react-router-dom";
import type { SiteContent } from "../../types/siteContent";

type AboutMosaicSectionProps = {
  content?: SiteContent["home"]["aboutMosaicSection"];
};

const API_URL = import.meta.env.VITE_API_URL;

function AboutMosaicSection({ content }: AboutMosaicSectionProps) {
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
    <section className="about-mosaic section-shell section-shell--warm">
      <div className="container split-layout split-layout--text-wide about-mosaic__grid">
        <div className="about-mosaic__images">
          <img
            className="about-mosaic__img about-mosaic__img--small-top"
            src={imageSmallTop}
            alt={content.imageSmallTopAlt}
            loading="lazy"
          />
          <img
            className="about-mosaic__img about-mosaic__img--large"
            src={imageLarge}
            alt={content.imageLargeAlt}
            loading="lazy"
          />
          <img
            className="about-mosaic__img about-mosaic__img--small-bottom"
            src={imageSmallBottom}
            alt={content.imageSmallBottomAlt}
            loading="lazy"
          />
        </div>

        <div className="about-mosaic__text section-copy section-copy--narrow">
          <p className="section-label">{content.label}</p>
          <h2>{content.title}</h2>

          <ul className="about-mosaic__points">
            {content.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <div className="about-mosaic__button-row button-row button-row--start">
            <Link to={content.buttonHref} className="primary-btn">
              {content.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMosaicSection;