import type { SiteContent } from "../../../types/siteContent";
import AdminSiteContentImageField from "./AdminSiteContentImageField";

type AdminSiteContentAlumniEditorSectionProps = {
  content: SiteContent;
  onChange: (updater: (current: SiteContent) => SiteContent) => void;
};

function AdminSiteContentAlumniEditorSection({
  content,
  onChange,
}: AdminSiteContentAlumniEditorSectionProps) {
  const updateSocialSection = (
    key: keyof SiteContent["alumni"]["socialSection"],
    value: string
  ) => {
    onChange((current) => ({
      ...current,
      alumni: {
        ...current.alumni,
        socialSection: {
          ...current.alumni.socialSection,
          [key]: value,
        },
      },
    }));
  };

  const updateOpportunitiesSection = (
    key: keyof Omit<SiteContent["alumni"]["opportunitiesSection"], "points">,
    value: string
  ) => {
    onChange((current) => ({
      ...current,
      alumni: {
        ...current.alumni,
        opportunitiesSection: {
          ...current.alumni.opportunitiesSection,
          [key]: value,
        },
      },
    }));
  };

  const updateOpportunityPoint = (index: number, value: string) => {
    const nextPoints = [...content.alumni.opportunitiesSection.points];
    nextPoints[index] = value;

    onChange((current) => ({
      ...current,
      alumni: {
        ...current.alumni,
        opportunitiesSection: {
          ...current.alumni.opportunitiesSection,
          points: nextPoints,
        },
      },
    }));
  };

  return (
    <section className="admin-site-content-editor">
      <div className="admin-site-content-editor__section">
        <div className="admin-site-content-editor__section-head">
          <h2>Alumni — Social Section</h2>
        </div>

        <div className="admin-site-content-editor__grid">
          <label className="admin-site-content-editor__field">
            <span>Label</span>
            <input
              type="text"
              value={content.alumni.socialSection.label}
              onChange={(event) =>
                updateSocialSection("label", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Title</span>
            <input
              type="text"
              value={content.alumni.socialSection.title}
              onChange={(event) =>
                updateSocialSection("title", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Intro</span>
            <textarea
              rows={4}
              value={content.alumni.socialSection.intro}
              onChange={(event) =>
                updateSocialSection("intro", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Telegram URL</span>
            <input
              type="text"
              value={content.alumni.socialSection.telegramUrl}
              onChange={(event) =>
                updateSocialSection("telegramUrl", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Instagram URL</span>
            <input
              type="text"
              value={content.alumni.socialSection.instagramUrl}
              onChange={(event) =>
                updateSocialSection("instagramUrl", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>LinkedIn URL</span>
            <input
              type="text"
              value={content.alumni.socialSection.linkedinUrl}
              onChange={(event) =>
                updateSocialSection("linkedinUrl", event.target.value)
              }
            />
          </label>
        </div>
      </div>

      <div className="admin-site-content-editor__section">
        <div className="admin-site-content-editor__section-head">
          <h2>Alumni — Opportunities Section</h2>
        </div>

        <div className="admin-site-content-editor__grid">
          <label className="admin-site-content-editor__field">
            <span>Label</span>
            <input
              type="text"
              value={content.alumni.opportunitiesSection.label}
              onChange={(event) =>
                updateOpportunitiesSection("label", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Title</span>
            <input
              type="text"
              value={content.alumni.opportunitiesSection.title}
              onChange={(event) =>
                updateOpportunitiesSection("title", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Lead</span>
            <textarea
              rows={4}
              value={content.alumni.opportunitiesSection.lead}
              onChange={(event) =>
                updateOpportunitiesSection("lead", event.target.value)
              }
            />
          </label>

          {content.alumni.opportunitiesSection.points.map((point, index) => (
            <label
              key={index}
              className="admin-site-content-editor__field admin-site-content-editor__field--full"
            >
              <span>Point {index + 1}</span>
              <input
                type="text"
                value={point}
                onChange={(event) =>
                  updateOpportunityPoint(index, event.target.value)
                }
              />
            </label>
          ))}

          <label className="admin-site-content-editor__field">
            <span>Image alt</span>
            <input
              type="text"
              value={content.alumni.opportunitiesSection.imageAlt}
              onChange={(event) =>
                updateOpportunitiesSection("imageAlt", event.target.value)
              }
            />
          </label>
        </div>

        <AdminSiteContentImageField
          label="Opportunities image"
          image={content.alumni.opportunitiesSection.image}
          alt={content.alumni.opportunitiesSection.imageAlt}
          onChange={(value) => updateOpportunitiesSection("image", value)}
        />
      </div>
    </section>
  );
}

export default AdminSiteContentAlumniEditorSection;