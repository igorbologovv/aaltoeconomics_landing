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
    <section className="about-section">
      <div className="container about-section__grid">
        <div className="about-section__text">
          <p className="section-label">{content.label}</p>
          <h2>{content.title}</h2>

          <p>{content.paragraphOne}</p>
          <p>{content.paragraphTwo}</p>

          <div className="about-section__button-row">
            <Link to={content.buttonHref} className="primary-btn">
              {content.buttonText}
            </Link>
          </div>
        </div>

        <div className="about-section__image-wrap">
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