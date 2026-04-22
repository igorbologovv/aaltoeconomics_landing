import type { SiteContent } from "../../types/siteContent";

type CompaniesRecruitmentSectionProps = {
  content?: SiteContent["forCompanies"]["recruitmentSection"];
};

const API_URL = import.meta.env.VITE_API_URL;

function CompaniesRecruitmentSection({
  content,
}: CompaniesRecruitmentSectionProps) {
  if (!content) return null;

  const imageSrc = content.image.startsWith("/uploads")
    ? `${API_URL}${content.image}`
    : content.image;

  return (
    <section className="companies-recruitment">
      <div className="container companies-recruitment__grid">
        <div className="companies-recruitment__text">
          <p className="section-label">{content.label}</p>

          <h2>{content.title}</h2>

          <p>{content.paragraphOne}</p>
          <p>{content.paragraphTwo}</p>
        </div>

        <div className="companies-recruitment__image-wrap">
          <img
            className="companies-recruitment__image"
            src={imageSrc}
            alt={content.imageAlt}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default CompaniesRecruitmentSection;