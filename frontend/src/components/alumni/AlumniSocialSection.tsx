import type { SiteContent } from "../../types/siteContent";

type AlumniSocialSectionProps = {
  content?: SiteContent["alumni"]["socialSection"];
};

function AlumniSocialSection({ content }: AlumniSocialSectionProps) {
  if (!content) return null;

  return (
    <section className="alumni-social">
      <div className="container alumni-social__inner">
        <div className="alumni-social__text">
          <p className="section-label">{content.label}</p>
          <h2>{content.title}</h2>
          <p className="alumni-social__intro">{content.intro}</p>
        </div>

        <div className="alumni-social__grid">
          <a
            className="alumni-social__item"
            href={content.telegramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Telegram"
          >
            <svg
              className="alumni-social__icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M21.5 4.5 18.4 19c-.2 1-1 1.2-1.8.8l-4-3-1.9 1.8c-.2.2-.4.4-.8.4l.3-4.2 7.7-7c.3-.3-.1-.5-.5-.2L8 13.2l-4-1.2c-.9-.3-.9-.9.2-1.3L20 4.6c.8-.3 1.7.2 1.5-.1Z" />
            </svg>
          </a>

          <a
            className="alumni-social__item"
            href={content.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Instagram"
          >
            <svg
              className="alumni-social__icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm5 2.3A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 2.2A3.3 3.3 0 1 0 15.3 12 3.3 3.3 0 0 0 12 8.7Zm5.9-3.6a1.3 1.3 0 1 1-1.3 1.3 1.3 1.3 0 0 1 1.3-1.3Z" />
            </svg>
          </a>

          <a
            className="alumni-social__item"
            href={content.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn"
          >
            <svg
              className="alumni-social__icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4.9 3.5a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM3.3 8.7h3.2V20H3.3V8.7Zm5.2 0h3.1v1.5h.1A3.4 3.4 0 0 1 14.8 8c3.3 0 3.9 2.1 3.9 4.9V20h-3.2v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V20H8.5V8.7Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AlumniSocialSection;