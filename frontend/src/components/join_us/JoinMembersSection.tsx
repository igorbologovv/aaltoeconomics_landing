import { Link } from "react-router-dom";
import type { SiteContent } from "../../types/siteContent";

type JoinMembersSectionProps = {
  content?: SiteContent["joinUs"]["membersSection"];
};

const API_URL = import.meta.env.VITE_API_URL;

function JoinMembersSection({ content }: JoinMembersSectionProps) {
  if (!content) return null;

  const imageSrc = content.image.startsWith("/uploads")
    ? `${API_URL}${content.image}`
    : content.image;

  return (
    <section className="join-members">
      <div className="container join-members__grid">
        <div className="join-members__text">
          <p className="section-label">{content.label}</p>
          <h2>{content.title}</h2>

          <p>{content.paragraph}</p>

          <div className="join-members__button-row">
            <Link to={content.buttonHref} className="primary-btn">
              {content.buttonText}
            </Link>
          </div>
        </div>

        <div className="join-members__image-wrap">
          <img
            className="join-members__image"
            src={imageSrc}
            alt={content.imageAlt}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default JoinMembersSection;