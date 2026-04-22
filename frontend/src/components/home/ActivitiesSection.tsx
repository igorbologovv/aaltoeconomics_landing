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
    <section className="activities-section section-shell section-shell--soft">
      <div className="container split-layout split-layout--media-wide activities-section__grid">
        <div className="activities-section__image-wrap media-card">
          <img
            className="activities-section__image"
            src={imageSrc}
            alt={content.imageAlt}
            loading="lazy"
          />
        </div>

        <div className="activities-section__text section-copy">
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