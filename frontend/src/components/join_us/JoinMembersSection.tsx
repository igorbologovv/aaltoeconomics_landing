import { Link } from "react-router-dom";

function JoinMembersSection() {
  return (
    <section className="join-members">
      <div className="container join-members__grid">
        <div className="join-members__text">
          <p className="section-label">Our Community</p>
          <h2>Our Members</h2>

          <p>
            Our members are passionate students from diverse academic
            backgrounds who share a strong interest in economics. They come
            together to learn, discuss, and apply economic ideas.
          </p>

          <div className="join-members__button-row">
            <Link to="/for-alumni" className="primary-btn">
              Meet the team
            </Link>
          </div>
        </div>

        <div className="join-members__image-wrap">
          <img
            className="join-members__image"
            src="/images/join/join-members.jpg"
            alt="Aalto Economics members"
          />
        </div>
      </div>
    </section>
  );
}

export default JoinMembersSection;