import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="container about-section__grid">
        <div className="about-section__text">
          <p className="section-label">About</p>
          <h2>Who are we?</h2>

          <p>
            We are Aalto Economics, the student association of economics students
            at Aalto University School of Business. Our goal is to take care of
            all the economics-minded students’ interests, well-being and future
            career paths, without forgetting about all the fun and exciting
            student activities.
          </p>

          <p>
            We’re proud of our connections with the Department of Economics and
            with leading economics-oriented companies. We aim to maintain
            a pathway for students to interact with the department as well
            as offer the best contacts, knowledge and experience for everyone
            interested in economics. We also keep in close touch with our alumni
            to stay on top of the different career possibilities.
          </p>

          <Link to="/for-alumni" className="primary-btn">
            Meet the team
          </Link>
        </div>

        <div className="about-section__image-wrap">
          <img
            className="about-section__image"
            src="/images/home/who-we-are.jpg"
            alt="Aalto Economics board"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;