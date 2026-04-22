import { Link } from "react-router-dom";
import type { SiteContent } from "../../types/siteContent";

type CompaniesResultsSectionProps = {
  content?: SiteContent["forCompanies"]["resultsSection"];
};

const API_URL = import.meta.env.VITE_API_URL;

function CompaniesResultsSection({ content }: CompaniesResultsSectionProps) {
  if (!content) return null;

  const imageSrc = content.image.startsWith("/uploads")
    ? `${API_URL}${content.image}`
    : content.image;

  const isExternalLink =
    content.buttonHref.startsWith("http://") ||
    content.buttonHref.startsWith("https://") ||
    content.buttonHref.startsWith("mailto:") ||
    content.buttonHref.startsWith("tel:");

  return (
    <section className="companies-results">
      <div className="container companies-results__grid">
        <div className="companies-results__image-wrap">
          <img
            className="companies-results__image"
            src={imageSrc}
            alt={content.imageAlt}
            loading="lazy"
          />
        </div>

        <div className="companies-results__text">
          <p className="section-label">{content.label}</p>

          <h2>{content.title}</h2>

          <p>{content.paragraphOne}</p>
          <p>{content.paragraphTwo}</p>

          <p className="companies-results__contact">
            {content.contactText}{" "}
            <a href={`mailto:${content.contactEmail}`}>{content.contactEmail}</a>
          </p>

          <div className="companies-results__actions">
            {isExternalLink ? (
              <a
                href={content.buttonHref}
                className="primary-btn"
                target="_blank"
                rel="noreferrer"
              >
                {content.buttonText}
              </a>
            ) : (
              <Link to={content.buttonHref} className="primary-btn">
                {content.buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompaniesResultsSection;