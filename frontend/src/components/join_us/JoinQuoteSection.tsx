import type { SiteContent } from "../../types/siteContent";

type JoinQuoteSectionProps = {
  content?: SiteContent["joinUs"]["quoteSection"];
};

const API_URL = import.meta.env.VITE_API_URL;

function JoinQuoteSection({ content }: JoinQuoteSectionProps) {
  if (!content) return null;

  const imageSrc = content.image.startsWith("/uploads")
    ? `${API_URL}${content.image}`
    : content.image;

  return (
    <section className="join-quote">
      <div className="container join-quote__grid">
        <div className="join-quote__text-wrap">
          <div className="join-quote__icon" aria-hidden="true">
            “
          </div>

          <blockquote className="join-quote__text">{content.quote}</blockquote>

          <p className="join-quote__author">{content.author}</p>
        </div>

        <div className="join-quote__image-wrap media-card media-card--strong media-card--zoom">
          <img
            className="join-quote__image"
            src={imageSrc}
            alt={content.imageAlt}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default JoinQuoteSection;