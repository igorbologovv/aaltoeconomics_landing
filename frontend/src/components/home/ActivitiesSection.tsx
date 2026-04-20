import type { SiteContent } from "../../types/siteContent";

type ActivitiesSectionProps = {
  content?: SiteContent["home"]["activitiesSection"];
};

const API_URL = import.meta.env.VITE_API_URL;

function ActivitiesSection({ content }: ActivitiesSectionProps) {
  if (!content) return null;

  const imageSrc = content.image.startsWith("/uploads")
    ? `${API_URL}${content.image}`
    : content.image;

  return (
    <section className="activities-section">
      <div className="container activities-section__grid">
        <div className="activities-section__image-wrap">
          <img
            className="activities-section__image"
            src={imageSrc}
            alt={content.imageAlt}
            loading="lazy"
          />
        </div>

        <div className="activities-section__text">
          <p className="section-label">{content.label}</p>
          <h2>{content.title}</h2>

          <p>{content.paragraphOne}</p>
          <p>{content.paragraphTwo}</p>
        </div>
      </div>
    </section>
  );
}

export default ActivitiesSection;