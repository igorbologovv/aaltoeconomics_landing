import type { SiteContent } from "../../types/siteContent";

type JoinNetworkingSectionProps = {
  content?: SiteContent["joinUs"]["networkingSection"];
};

const API_URL = import.meta.env.VITE_API_URL;

function JoinNetworkingSection({ content }: JoinNetworkingSectionProps) {
  if (!content) return null;

  const imageSrc = content.image.startsWith("/uploads")
    ? `${API_URL}${content.image}`
    : content.image;

  return (
    <section className="join-networking section-shell">
      <div className="container split-layout split-layout--media-wide join-networking__grid">
        <div className="join-networking__image-wrap media-card media-card--strong media-card--zoom">
          <img
            className="join-networking__image"
            src={imageSrc}
            alt={content.imageAlt}
            loading="lazy"
          />
        </div>

        <div className="join-networking__text section-copy section-copy--wide">
          <p className="section-label">{content.label}</p>
          <h2>{content.title}</h2>
          <p className="join-networking__lead">{content.lead}</p>
          <p>{content.paragraph}</p>
        </div>
      </div>
    </section>
  );
}

export default JoinNetworkingSection;