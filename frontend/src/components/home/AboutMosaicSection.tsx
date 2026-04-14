import { Link } from "react-router-dom";

function AboutMosaicSection() {
  return (
    <section className="about-mosaic">
      <div className="container about-mosaic__grid">
        <div className="about-mosaic__images">
          <img
            className="about-mosaic__img about-mosaic__img--small-top"
            src="/images/home/about-small-1.jpg"
            alt="Aalto Economics students"
          />
          <img
            className="about-mosaic__img about-mosaic__img--large"
            src="/images/home/about-large.jpg"
            alt="Aalto Economics community"
          />
          <img
            className="about-mosaic__img about-mosaic__img--small-bottom"
            src="/images/home/about-small-2.jpg"
            alt="Aalto Economics event"
          />
        </div>

        <div className="about-mosaic__text">
          <p className="section-label">About Us</p>
          <h2>Shaping the Future of Economics Together.</h2>

          <ul className="about-mosaic__points">
            <li>Innovative education in economics and research.</li>
            <li>Strong connections with industry and alumni.</li>
            <li>Engaging events for learning and networking.</li>
          </ul>

          <div className="about-mosaic__button-row">
            <Link to="/for-alumni" className="primary-btn">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMosaicSection;