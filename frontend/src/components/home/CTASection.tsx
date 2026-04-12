import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="home-cta">
      <div className="home-cta__overlay">
        <div className="container home-cta__content">
          <p className="section-label light">Get involved</p>
          <h2>What can we offer you?</h2>

          <p>
            By becoming a member, you’ll stay up to date with our latest news.
            We’ll also keep you informed about job openings and upcoming
            events. To make sure you don’t miss anything, we recommend
            following our social media channels as well.
          </p>

          <p>
            If you represent a company or another stakeholder and are
            interested in collaborating with us, please get in touch with the
            Corporate Relations members of the current board.
          </p>

          <div className="home-cta__actions">
            <Link to="/join-us" className="primary-btn">
              Join Us
            </Link>

            <Link to="/for-companies" className="primary-btn">
              For Companies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;