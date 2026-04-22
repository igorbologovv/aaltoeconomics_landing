import { Link } from "react-router-dom";
import type { SiteContent } from "../../types/siteContent";

type AboutSectionProps = {
  content?: SiteContent["home"]["aboutSection"];
};

const API_URL = import.meta.env.VITE_API_URL;

function AboutSection({ content }: AboutSectionProps) {
  if (!content) return null;

  const imageSrc = content.image.startsWith("/uploads")
    ? `${API_URL}${content.image}`
    : content.image;

  return (
    <section className="about-section section-shell section-shell--light">
      <div className="container split-layout split-layout--media-wide about-section__grid">
        <div className="about-section__text section-copy section-copy--wide">
          <p className="section-label">{content.label}</p>
          <h2>{content.title}</h2>

          <p>{content.paragraphOne}</p>
          <p>{content.paragraphTwo}</p>

          <div className="about-section__button-row button-row button-row--center">
            <Link to={content.buttonHref} className="primary-btn">
              {content.buttonText}
            </Link>
          </div>
        </div>

        <div className="about-section__image-wrap media-card media-card--strong media-card--zoom">
          <img
            className="about-section__image"
            src={imageSrc}
            alt={content.imageAlt}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;