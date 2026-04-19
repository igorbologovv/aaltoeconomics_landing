import { Link } from "react-router-dom";

function JoinHeroSection() {
  return (
    <section className="join-hero">
      <div className="join-hero__overlay" />

      <div className="container join-hero__content">
        <div className="join-hero__left">
          <p className="join-hero__eyebrow">Join Aalto Economics</p>

          <h1 className="join-hero__title">
            Become Part
            <br />
            of Aalto
            <br />
            Economics
          </h1>

          <div className="join-hero__button-row">
            <Link to="/join-us/apply" className="primary-btn">
              Join Us Now
            </Link>
          </div>
        </div>

        <div className="join-hero__right">
          <p className="join-hero__description">
            Join a student community built around economics, meaningful events,
            strong connections, and opportunities to grow both academically and
            professionally at Aalto University.
          </p>
        </div>
      </div>
    </section>
  );
}

export default JoinHeroSection;