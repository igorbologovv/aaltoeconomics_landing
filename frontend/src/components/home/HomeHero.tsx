import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero__bg" />
      <div className="home-hero__shade" />

      <div className="home-hero__inner">
        <p className="home-hero__kicker">Student Association of Economics</p>

        <h1 className="home-hero__title">Aalto Economics</h1>

        <p className="home-hero__text">
          A modern student community for economics-minded students at Aalto
          University School of Business.
        </p>

        <div className="home-hero__actions">
          <Link to="/join-us" className="primary-btn">
            Join Us
          </Link>
          <Link to="/for-companies" className="secondary-btn">
            For Companies
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;