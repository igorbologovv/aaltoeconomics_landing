import { Link } from "react-router-dom";
import type { SiteContent } from "../../types/siteContent";

type CareerShareSectionProps = {
  content?: SiteContent["careerStories"]["shareSection"];
};

function CareerShareSection({ content }: CareerShareSectionProps) {
  if (!content) return null;

  return (
    <section className="career-share-section surface-brand">
      <div className="container career-share-section__content section-copy section-copy--light section-copy--center">
        <h2>{content.title}</h2>

        <p>{content.paragraph}</p>

        <div className="career-share-section__actions button-row button-row--center">
          <Link to={content.buttonHref} className="primary-btn">
            {content.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CareerShareSection;