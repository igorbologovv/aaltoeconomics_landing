import type { SiteContent } from "../../../types/siteContent";
import AdminSiteContentImageField from "./AdminSiteContentImageField";

type AdminSiteContentHomeEditorSectionProps = {
  content: SiteContent;
  onChange: (updater: (current: SiteContent) => SiteContent) => void;
};

function AdminSiteContentHomeEditorSection({
  content,
  onChange,
}: AdminSiteContentHomeEditorSectionProps) {
  const updateAboutSection = (
    key: keyof SiteContent["home"]["aboutSection"],
    value: string
  ) => {
    onChange((current) => ({
      ...current,
      home: {
        ...current.home,
        aboutSection: {
          ...current.home.aboutSection,
          [key]: value,
        },
      },
    }));
  };

  const updateActivitiesSection = (
    key: keyof SiteContent["home"]["activitiesSection"],
    value: string
  ) => {
    onChange((current) => ({
      ...current,
      home: {
        ...current.home,
        activitiesSection: {
          ...current.home.activitiesSection,
          [key]: value,
        },
      },
    }));
  };

  const updateAboutMosaicSection = (
    key: keyof Omit<SiteContent["home"]["aboutMosaicSection"], "points">,
    value: string
  ) => {
    onChange((current) => ({
      ...current,
      home: {
        ...current.home,
        aboutMosaicSection: {
          ...current.home.aboutMosaicSection,
          [key]: value,
        },
      },
    }));
  };

  const updateMosaicPoint = (index: number, value: string) => {
    const nextPoints = [...content.home.aboutMosaicSection.points];
    nextPoints[index] = value;

    onChange((current) => ({
      ...current,
      home: {
        ...current.home,
        aboutMosaicSection: {
          ...current.home.aboutMosaicSection,
          points: nextPoints,
        },
      },
    }));
  };

  const updateCTASection = (
    key: keyof SiteContent["home"]["ctaSection"],
    value: string
  ) => {
    onChange((current) => ({
      ...current,
      home: {
        ...current.home,
        ctaSection: {
          ...current.home.ctaSection,
          [key]: value,
        },
      },
    }));
  };

  return (
    <section className="admin-site-content-editor">
      <div className="admin-site-content-editor__section">
        <div className="admin-site-content-editor__section-head">
          <h2>About Section</h2>
        </div>

        <div className="admin-site-content-editor__grid">
          <label className="admin-site-content-editor__field">
            <span>Label</span>
            <input
              type="text"
              value={content.home.aboutSection.label}
              onChange={(event) =>
                updateAboutSection("label", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Title</span>
            <input
              type="text"
              value={content.home.aboutSection.title}
              onChange={(event) =>
                updateAboutSection("title", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Paragraph one</span>
            <textarea
              rows={5}
              value={content.home.aboutSection.paragraphOne}
              onChange={(event) =>
                updateAboutSection("paragraphOne", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Paragraph two</span>
            <textarea
              rows={5}
              value={content.home.aboutSection.paragraphTwo}
              onChange={(event) =>
                updateAboutSection("paragraphTwo", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Button text</span>
            <input
              type="text"
              value={content.home.aboutSection.buttonText}
              onChange={(event) =>
                updateAboutSection("buttonText", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Button href</span>
            <input
              type="text"
              value={content.home.aboutSection.buttonHref}
              onChange={(event) =>
                updateAboutSection("buttonHref", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Image alt</span>
            <input
              type="text"
              value={content.home.aboutSection.imageAlt}
              onChange={(event) =>
                updateAboutSection("imageAlt", event.target.value)
              }
            />
          </label>
        </div>

        <AdminSiteContentImageField
          label="About image"
          image={content.home.aboutSection.image}
          alt={content.home.aboutSection.imageAlt}
          onChange={(value) => updateAboutSection("image", value)}
        />
      </div>

      <div className="admin-site-content-editor__section">
        <div className="admin-site-content-editor__section-head">
          <h2>Activities Section</h2>
        </div>

        <div className="admin-site-content-editor__grid">
          <label className="admin-site-content-editor__field">
            <span>Label</span>
            <input
              type="text"
              value={content.home.activitiesSection.label}
              onChange={(event) =>
                updateActivitiesSection("label", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Title</span>
            <input
              type="text"
              value={content.home.activitiesSection.title}
              onChange={(event) =>
                updateActivitiesSection("title", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Paragraph one</span>
            <textarea
              rows={5}
              value={content.home.activitiesSection.paragraphOne}
              onChange={(event) =>
                updateActivitiesSection("paragraphOne", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Paragraph two</span>
            <textarea
              rows={5}
              value={content.home.activitiesSection.paragraphTwo}
              onChange={(event) =>
                updateActivitiesSection("paragraphTwo", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Image alt</span>
            <input
              type="text"
              value={content.home.activitiesSection.imageAlt}
              onChange={(event) =>
                updateActivitiesSection("imageAlt", event.target.value)
              }
            />
          </label>
        </div>

        <AdminSiteContentImageField
          label="Activities image"
          image={content.home.activitiesSection.image}
          alt={content.home.activitiesSection.imageAlt}
          onChange={(value) => updateActivitiesSection("image", value)}
        />
      </div>

      <div className="admin-site-content-editor__section">
        <div className="admin-site-content-editor__section-head">
          <h2>About Mosaic Section</h2>
        </div>

        <div className="admin-site-content-editor__grid">
          <label className="admin-site-content-editor__field">
            <span>Label</span>
            <input
              type="text"
              value={content.home.aboutMosaicSection.label}
              onChange={(event) =>
                updateAboutMosaicSection("label", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Title</span>
            <input
              type="text"
              value={content.home.aboutMosaicSection.title}
              onChange={(event) =>
                updateAboutMosaicSection("title", event.target.value)
              }
            />
          </label>

          {content.home.aboutMosaicSection.points.map((point, index) => (
            <label
              key={index}
              className="admin-site-content-editor__field admin-site-content-editor__field--full"
            >
              <span>Point {index + 1}</span>
              <input
                type="text"
                value={point}
                onChange={(event) =>
                  updateMosaicPoint(index, event.target.value)
                }
              />
            </label>
          ))}

          <label className="admin-site-content-editor__field">
            <span>Button text</span>
            <input
              type="text"
              value={content.home.aboutMosaicSection.buttonText}
              onChange={(event) =>
                updateAboutMosaicSection("buttonText", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Button href</span>
            <input
              type="text"
              value={content.home.aboutMosaicSection.buttonHref}
              onChange={(event) =>
                updateAboutMosaicSection("buttonHref", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Small top image alt</span>
            <input
              type="text"
              value={content.home.aboutMosaicSection.imageSmallTopAlt}
              onChange={(event) =>
                updateAboutMosaicSection("imageSmallTopAlt", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Large image alt</span>
            <input
              type="text"
              value={content.home.aboutMosaicSection.imageLargeAlt}
              onChange={(event) =>
                updateAboutMosaicSection("imageLargeAlt", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Small bottom image alt</span>
            <input
              type="text"
              value={content.home.aboutMosaicSection.imageSmallBottomAlt}
              onChange={(event) =>
                updateAboutMosaicSection(
                  "imageSmallBottomAlt",
                  event.target.value
                )
              }
            />
          </label>
        </div>

        <div className="admin-site-content-editor__image-grid">
          <AdminSiteContentImageField
            label="Small top image"
            image={content.home.aboutMosaicSection.imageSmallTop}
            alt={content.home.aboutMosaicSection.imageSmallTopAlt}
            onChange={(value) => updateAboutMosaicSection("imageSmallTop", value)}
          />

          <AdminSiteContentImageField
            label="Large image"
            image={content.home.aboutMosaicSection.imageLarge}
            alt={content.home.aboutMosaicSection.imageLargeAlt}
            onChange={(value) => updateAboutMosaicSection("imageLarge", value)}
          />

          <AdminSiteContentImageField
            label="Small bottom image"
            image={content.home.aboutMosaicSection.imageSmallBottom}
            alt={content.home.aboutMosaicSection.imageSmallBottomAlt}
            onChange={(value) =>
              updateAboutMosaicSection("imageSmallBottom", value)
            }
          />
        </div>
      </div>

      <div className="admin-site-content-editor__section">
        <div className="admin-site-content-editor__section-head">
          <h2>CTA Section</h2>
        </div>

        <div className="admin-site-content-editor__grid">
          <label className="admin-site-content-editor__field">
            <span>Label</span>
            <input
              type="text"
              value={content.home.ctaSection.label}
              onChange={(event) =>
                updateCTASection("label", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Title</span>
            <input
              type="text"
              value={content.home.ctaSection.title}
              onChange={(event) =>
                updateCTASection("title", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Paragraph one</span>
            <textarea
              rows={5}
              value={content.home.ctaSection.paragraphOne}
              onChange={(event) =>
                updateCTASection("paragraphOne", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field admin-site-content-editor__field--full">
            <span>Paragraph two</span>
            <textarea
              rows={5}
              value={content.home.ctaSection.paragraphTwo}
              onChange={(event) =>
                updateCTASection("paragraphTwo", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Primary button text</span>
            <input
              type="text"
              value={content.home.ctaSection.primaryButtonText}
              onChange={(event) =>
                updateCTASection("primaryButtonText", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Primary button href</span>
            <input
              type="text"
              value={content.home.ctaSection.primaryButtonHref}
              onChange={(event) =>
                updateCTASection("primaryButtonHref", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Secondary button text</span>
            <input
              type="text"
              value={content.home.ctaSection.secondaryButtonText}
              onChange={(event) =>
                updateCTASection("secondaryButtonText", event.target.value)
              }
            />
          </label>

          <label className="admin-site-content-editor__field">
            <span>Secondary button href</span>
            <input
              type="text"
              value={content.home.ctaSection.secondaryButtonHref}
              onChange={(event) =>
                updateCTASection("secondaryButtonHref", event.target.value)
              }
            />
          </label>
        </div>
      </div>
    </section>
  );
}

export default AdminSiteContentHomeEditorSection;