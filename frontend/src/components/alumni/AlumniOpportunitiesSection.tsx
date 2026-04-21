import type { SiteContent } from "../../types/siteContent";

type AlumniOpportunitiesSectionProps = {
  content?: SiteContent["alumni"]["opportunitiesSection"];
};

const API_URL = import.meta.env.VITE_API_URL;

function AlumniOpportunitiesSection({
  content,
}: AlumniOpportunitiesSectionProps) {
  if (!content) return null;

  const imageSrc = content.image.startsWith("/uploads")
    ? `${API_URL}${content.image}`
    : content.image;

  return (
    <section className="alumni-opportunities">
      <div className="container alumni-opportunities__grid">
        <div className="alumni-opportunities__text">
          <p className="section-label">{content.label}</p>

          <h2>{content.title}</h2>

          <p className="alumni-opportunities__lead">{content.lead}</p>

          <ul className="alumni-opportunities__points">
            {content.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="alumni-opportunities__image-wrap">
          <img
            className="alumni-opportunities__image"
            src={imageSrc}
            alt={content.imageAlt}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default AlumniOpportunitiesSection;