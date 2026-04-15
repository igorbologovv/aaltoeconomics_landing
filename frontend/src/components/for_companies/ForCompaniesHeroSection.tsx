import { Link } from "react-router-dom";

function ForCompaniesHeroSection() {
  return (
    <section className="companies-hero">
      <div className="companies-hero__media">
        <img
          className="companies-hero__image"
          src="/images/for_companies/aaltoecobuilding.jpg"
          alt="Aalto Economics building"
        />
        <div className="companies-hero__overlay" />
      </div>

      <div className="container companies-hero__content">
        <p className="companies-hero__eyebrow">For Companies</p>

        <h1 className="companies-hero__title">
          Connect with
          <br />
          Aalto Economics
          <br />
          students
        </h1>

        <p className="companies-hero__description">
          Reach economics-minded students at Aalto University School of Business
          through targeted collaboration, recruitment opportunities, and visible
          partnership with our community.
        </p>

        <div className="companies-hero__actions">
          <Link to="/contact" className="primary-btn">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ForCompaniesHeroSection;