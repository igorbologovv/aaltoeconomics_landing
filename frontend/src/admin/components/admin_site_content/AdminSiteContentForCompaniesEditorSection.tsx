import type { SiteContent } from "../../../types/siteContent";
import AdminSiteContentImageField from "./AdminSiteContentImageField";

type AdminSiteContentForCompaniesEditorSectionProps = {
  content: SiteContent;
  onChange: (updater: (current: SiteContent) => SiteContent) => void;
};

function AdminSiteContentForCompaniesEditorSection({
  content,
  onChange,
}: AdminSiteContentForCompaniesEditorSectionProps) {
  const updateRecruitmentSection = (
    key: keyof SiteContent["forCompanies"]["recruitmentSection"],
    value: string
  ) => {
    onChange((current) => ({
      ...current,
      forCompanies: {
        ...current.forCompanies,
        recruitmentSection: {
          ...current.forCompanies.recruitmentSection,
          [key]: value,
        },
        resultsSection: current.forCompanies.resultsSection,
      },
    }));
  };

  const updateResultsSection = (
    key: keyof SiteContent["forCompanies"]["resultsSection"],
    value: string
  ) => {
    onChange((current) => ({
      ...current,
      forCompanies: {
        ...current.forCompanies,
        recruitmentSection: current.forCompanies.recruitmentSection,
        resultsSection: {
          ...current.forCompanies.resultsSection,
          [key]: value,
        },
      },
    }));
  };

  return (
    <section className="admin-site-content-editor">
      <div className="admin-site-content-editor__section">
        <div className="admin-site-content-editor__section-head">
          <h2>For Companies — Recruitment Section</h2>
        </div>

        <div className="admin-site-content-editor__grid">
          <label className="admin-site-content-editor__field">
            <span>Label</span>
            <input
              type="text"
              value={content.forCompanies.recruitmentSection.label}
              onChange={(event) =>
                updateRecruitmentSection("label", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Title</span>
            <input
              type="text"
              value={content.forCompanies.recruitmentSection.title}
              onChange={(event) =>
                updateRecruitmentSection("title", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Paragraph one</span>
            <textarea
              rows={5}
              value={content.forCompanies.recruitmentSection.paragraphOne}
              onChange={(event) =>
                updateRecruitmentSection("paragraphOne", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Paragraph two</span>
            <textarea
              rows={5}
              value={content.forCompanies.recruitmentSection.paragraphTwo}
              onChange={(event) =>
                updateRecruitmentSection("paragraphTwo", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Image alt</span>
            <input
              type="text"
              value={content.forCompanies.recruitmentSection.imageAlt}
              onChange={(event) =>
                updateRecruitmentSection("imageAlt", event.target.value)
              }
            />
          </label>
        </div>

        <AdminSiteContentImageField
          label="Recruitment image"
          image={content.forCompanies.recruitmentSection.image}
          alt={content.forCompanies.recruitmentSection.imageAlt}
          onChange={(value) => updateRecruitmentSection("image", value)}
        />
      </div>

      <div className="admin-site-content-editor__section">
        <div className="admin-site-content-editor__section-head">
          <h2>For Companies — Results Section</h2>
        </div>

        <div className="admin-site-content-editor__grid">
          <label className="admin-site-content-editor__field">
            <span>Label</span>
            <input
              type="text"
              value={content.forCompanies.resultsSection.label}
              onChange={(event) =>
                updateResultsSection("label", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Title</span>
            <input
              type="text"
              value={content.forCompanies.resultsSection.title}
              onChange={(event) =>
                updateResultsSection("title", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Paragraph one</span>
            <textarea
              rows={5}
              value={content.forCompanies.resultsSection.paragraphOne}
              onChange={(event) =>
                updateResultsSection("paragraphOne", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Paragraph two</span>
            <textarea
              rows={5}
              value={content.forCompanies.resultsSection.paragraphTwo}
              onChange={(event) =>
                updateResultsSection("paragraphTwo", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Contact text</span>
            <input
              type="text"
              value={content.forCompanies.resultsSection.contactText}
              onChange={(event) =>
                updateResultsSection("contactText", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Contact email</span>
            <input
              type="text"
              value={content.forCompanies.resultsSection.contactEmail}
              onChange={(event) =>
                updateResultsSection("contactEmail", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Button text</span>
            <input
              type="text"
              value={content.forCompanies.resultsSection.buttonText}
              onChange={(event) =>
                updateResultsSection("buttonText", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Button href</span>
            <input
              type="text"
              value={content.forCompanies.resultsSection.buttonHref}
              onChange={(event) =>
                updateResultsSection("buttonHref", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Image alt</span>
            <input
              type="text"
              value={content.forCompanies.resultsSection.imageAlt}
              onChange={(event) =>
                updateResultsSection("imageAlt", event.target.value)
              }
            />
          </label>
        </div>

        <AdminSiteContentImageField
          label="Results image"
          image={content.forCompanies.resultsSection.image}
          alt={content.forCompanies.resultsSection.imageAlt}
          onChange={(value) => updateResultsSection("image", value)}
        />
      </div>
    </section>
  );
}

export default AdminSiteContentForCompaniesEditorSection;