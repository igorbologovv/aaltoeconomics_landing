import { Link } from "react-router-dom";

function JoinEventsSection() {
  return (
    <section className="join-events">
      <div className="container join-events__grid">
        <div className="join-events__text">
          <p className="section-label">Events</p>
          <h2>Our Events</h2>

          <p>
            From company visits and academic discussions to parties, dinners,
            and community gatherings, our events bring students together in
            meaningful and memorable ways throughout the year.
          </p>

          <p>
            We create opportunities to learn, connect, and enjoy student life
            with people who share an interest in economics and ambition for the
            future.
          </p>

          <div className="join-events__button-row">
            <Link to="/contact" className="primary-btn">
              Discover our events
            </Link>
          </div>
        </div>

        <div className="join-events__mosaic">
          <div className="join-events__image-card join-events__image-card--small-top">
            <img
              className="join-events__image"
              src="/images/join/events-1.jpg"
              alt="Aalto Economics event"
            />
          </div>

          <div className="join-events__image-card join-events__image-card--large">
            <img
              className="join-events__image"
              src="/images/join/events-2.jpg"
              alt="Aalto Economics student event"
            />
          </div>

          <div className="join-events__image-card join-events__image-card--small-bottom">
            <img
              className="join-events__image"
              src="/images/join/events-3.jpg"
              alt="Aalto Economics community gathering"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinEventsSection;