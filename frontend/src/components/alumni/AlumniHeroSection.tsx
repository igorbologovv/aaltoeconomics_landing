import { Link } from "react-router-dom";

function AlumniHeroSection() {
  return (
    <section className="alumni-hero">
      <div className="alumni-hero__overlay" />

      <div className="container alumni-hero__content">
        <div className="alumni-hero__text">
          <p className="alumni-hero__eyebrow">Aalto Economics Alumni</p>

          <h1 className="alumni-hero__title">
            Connected by knowledge,
            <br />
            driven by impact.
          </h1>

          <p className="alumni-hero__description">
            Our alumni are leaders, innovators, and changemakers, shaping the
            future of economics and beyond.
          </p>

          <div className="alumni-hero__actions">
            <Link to="/contact" className="primary-btn">
              Discover Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlumniHeroSection;