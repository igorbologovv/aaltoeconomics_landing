import type { SiteContent } from "../../../types/siteContent";
import AdminSiteContentImageField from "./AdminSiteContentImageField";

type AdminSiteContentJoinUsEditorSectionProps = {
  content: SiteContent;
  onChange: (updater: (current: SiteContent) => SiteContent) => void;
};

function AdminSiteContentJoinUsEditorSection({
  content,
  onChange,
}: AdminSiteContentJoinUsEditorSectionProps) {
  const updateMembersSection = (
    key: keyof SiteContent["joinUs"]["membersSection"],
    value: string
  ) => {
    onChange((current) => ({
      ...current,
      joinUs: {
        ...current.joinUs,
        membersSection: {
          ...current.joinUs.membersSection,
          [key]: value,
        },
      },
    }));
  };

  const updateNetworkingSection = (
    key: keyof SiteContent["joinUs"]["networkingSection"],
    value: string
  ) => {
    onChange((current) => ({
      ...current,
      joinUs: {
        ...current.joinUs,
        networkingSection: {
          ...current.joinUs.networkingSection,
          [key]: value,
        },
      },
    }));
  };

  const updateEventsSection = (
    key: keyof SiteContent["joinUs"]["eventsSection"],
    value: string
  ) => {
    onChange((current) => ({
      ...current,
      joinUs: {
        ...current.joinUs,
        eventsSection: {
          ...current.joinUs.eventsSection,
          [key]: value,
        },
      },
    }));
  };

  const updateQuoteSection = (
    key: keyof SiteContent["joinUs"]["quoteSection"],
    value: string
  ) => {
    onChange((current) => ({
      ...current,
      joinUs: {
        ...current.joinUs,
        quoteSection: {
          ...current.joinUs.quoteSection,
          [key]: value,
        },
      },
    }));
  };

  return (
    <section className="admin-site-content-editor">
      <div className="admin-site-content-editor__section">
        <div className="admin-site-content-editor__section-head">
          <h2>Join Us — Members Section</h2>
        </div>

        <div className="admin-site-content-editor__grid">
          <label className="admin-site-content-editor__field">
            <span>Label</span>
            <input
              type="text"
              value={content.joinUs.membersSection.label}
              onChange={(event) =>
                updateMembersSection("label", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Title</span>
            <input
              type="text"
              value={content.joinUs.membersSection.title}
              onChange={(event) =>
                updateMembersSection("title", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Paragraph</span>
            <textarea
              rows={5}
              value={content.joinUs.membersSection.paragraph}
              onChange={(event) =>
                updateMembersSection("paragraph", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Button text</span>
            <input
              type="text"
              value={content.joinUs.membersSection.buttonText}
              onChange={(event) =>
                updateMembersSection("buttonText", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Button href</span>
            <input
              type="text"
              value={content.joinUs.membersSection.buttonHref}
              onChange={(event) =>
                updateMembersSection("buttonHref", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Image alt</span>
            <input
              type="text"
              value={content.joinUs.membersSection.imageAlt}
              onChange={(event) =>
                updateMembersSection("imageAlt", event.target.value)
              }
            />
          </label>
        </div>

        <AdminSiteContentImageField
          label="Members image"
          image={content.joinUs.membersSection.image}
          alt={content.joinUs.membersSection.imageAlt}
          onChange={(value) => updateMembersSection("image", value)}
        />
      </div>

      <div className="admin-site-content-editor__section">
        <div className="admin-site-content-editor__section-head">
          <h2>Join Us — Networking Section</h2>
        </div>

        <div className="admin-site-content-editor__grid">
          <label className="admin-site-content-editor__field">
            <span>Label</span>
            <input
              type="text"
              value={content.joinUs.networkingSection.label}
              onChange={(event) =>
                updateNetworkingSection("label", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Title</span>
            <input
              type="text"
              value={content.joinUs.networkingSection.title}
              onChange={(event) =>
                updateNetworkingSection("title", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Lead</span>
            <textarea
              rows={3}
              value={content.joinUs.networkingSection.lead}
              onChange={(event) =>
                updateNetworkingSection("lead", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Paragraph</span>
            <textarea
              rows={5}
              value={content.joinUs.networkingSection.paragraph}
              onChange={(event) =>
                updateNetworkingSection("paragraph", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Image alt</span>
            <input
              type="text"
              value={content.joinUs.networkingSection.imageAlt}
              onChange={(event) =>
                updateNetworkingSection("imageAlt", event.target.value)
              }
            />
          </label>
        </div>

        <AdminSiteContentImageField
          label="Networking image"
          image={content.joinUs.networkingSection.image}
          alt={content.joinUs.networkingSection.imageAlt}
          onChange={(value) => updateNetworkingSection("image", value)}
        />
      </div>

      <div className="admin-site-content-editor__section">
        <div className="admin-site-content-editor__section-head">
          <h2>Join Us — Events Section</h2>
        </div>

        <div className="admin-site-content-editor__grid">
          <label className="admin-site-content-editor__field">
            <span>Label</span>
            <input
              type="text"
              value={content.joinUs.eventsSection.label}
              onChange={(event) =>
                updateEventsSection("label", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Title</span>
            <input
              type="text"
              value={content.joinUs.eventsSection.title}
              onChange={(event) =>
                updateEventsSection("title", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Paragraph one</span>
            <textarea
              rows={5}
              value={content.joinUs.eventsSection.paragraphOne}
              onChange={(event) =>
                updateEventsSection("paragraphOne", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Paragraph two</span>
            <textarea
              rows={5}
              value={content.joinUs.eventsSection.paragraphTwo}
              onChange={(event) =>
                updateEventsSection("paragraphTwo", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Button text</span>
            <input
              type="text"
              value={content.joinUs.eventsSection.buttonText}
              onChange={(event) =>
                updateEventsSection("buttonText", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Button href</span>
            <input
              type="text"
              value={content.joinUs.eventsSection.buttonHref}
              onChange={(event) =>
                updateEventsSection("buttonHref", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Small top image alt</span>
            <input
              type="text"
              value={content.joinUs.eventsSection.imageSmallTopAlt}
              onChange={(event) =>
                updateEventsSection("imageSmallTopAlt", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Large image alt</span>
            <input
              type="text"
              value={content.joinUs.eventsSection.imageLargeAlt}
              onChange={(event) =>
                updateEventsSection("imageLargeAlt", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Small bottom image alt</span>
            <input
              type="text"
              value={content.joinUs.eventsSection.imageSmallBottomAlt}
              onChange={(event) =>
                updateEventsSection("imageSmallBottomAlt", event.target.value)
              }
            />
          </label>
        </div>

        <div className="admin-site-content-editor__image-grid">
          <AdminSiteContentImageField
            label="Events small top image"
            image={content.joinUs.eventsSection.imageSmallTop}
            alt={content.joinUs.eventsSection.imageSmallTopAlt}
            onChange={(value) => updateEventsSection("imageSmallTop", value)}
          />

          <AdminSiteContentImageField
            label="Events large image"
            image={content.joinUs.eventsSection.imageLarge}
            alt={content.joinUs.eventsSection.imageLargeAlt}
            onChange={(value) => updateEventsSection("imageLarge", value)}
          />

          <AdminSiteContentImageField
            label="Events small bottom image"
            image={content.joinUs.eventsSection.imageSmallBottom}
            alt={content.joinUs.eventsSection.imageSmallBottomAlt}
            onChange={(value) => updateEventsSection("imageSmallBottom", value)}
          />
        </div>
      </div>

      <div className="admin-site-content-editor__section">
        <div className="admin-site-content-editor__section-head">
          <h2>Join Us — Quote Section</h2>
        </div>

        <div className="admin-site-content-editor__grid">
          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Quote</span>
            <textarea
              rows={5}
              value={content.joinUs.quoteSection.quote}
              onChange={(event) =>
                updateQuoteSection("quote", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Author</span>
            <input
              type="text"
              value={content.joinUs.quoteSection.author}
              onChange={(event) =>
                updateQuoteSection("author", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Image alt</span>
            <input
              type="text"
              value={content.joinUs.quoteSection.imageAlt}
              onChange={(event) =>
                updateQuoteSection("imageAlt", event.target.value)
              }
            />
          </label>
        </div>

        <AdminSiteContentImageField
          label="Quote image"
          image={content.joinUs.quoteSection.image}
          alt={content.joinUs.quoteSection.imageAlt}
          onChange={(value) => updateQuoteSection("image", value)}
        />
      </div>
    </section>
  );
}

export default AdminSiteContentJoinUsEditorSection;