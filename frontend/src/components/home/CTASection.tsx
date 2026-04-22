import { Link } from "react-router-dom";
import type { SiteContent } from "../../types/siteContent";

type CTASectionProps = {
  content?: SiteContent["home"]["ctaSection"];
};

function CTASection({ content }: CTASectionProps) {
  if (!content) return null;

  return (
    <section className="home-cta">
      <div className="home-cta__overlay">
        <div className="container home-cta__content section-copy section-copy--light section-copy--center">
          <p className="section-label light">{content.label}</p>
          <h2>{content.title}</h2>

          <p>{content.paragraphOne}</p>
          <p>{content.paragraphTwo}</p>

          <div className="home-cta__actions button-row button-row--center">
            <Link to={content.primaryButtonHref} className="primary-btn">
              {content.primaryButtonText}
            </Link>

            <Link to={content.secondaryButtonHref} className="secondary-btn">
              {content.secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;