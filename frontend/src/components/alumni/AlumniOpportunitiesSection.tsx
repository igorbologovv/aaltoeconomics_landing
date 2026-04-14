function AlumniOpportunitiesSection() {
  return (
    <section className="alumni-opportunities">
      <div className="container alumni-opportunities__grid">
        <div className="alumni-opportunities__text">
          <p className="section-label">Opportunities</p>

          <h2>There is something for everyone at Aalto Economics Alumni.</h2>

          <p className="alumni-opportunities__lead">
            We’re here to help you connect, learn and grow every step of the
            way.
          </p>

          <ul className="alumni-opportunities__points">
            <li>Stay part of a strong and growing alumni network.</li>
            <li>Join events, reconnect, and discover new opportunities.</li>
            <li>Share your experience and support the next generation.</li>
          </ul>
        </div>

        <div className="alumni-opportunities__image-wrap">
          <img
            className="alumni-opportunities__image"
            src="/images/alumni/alumni-opportunities.jpg"
            alt="Aalto Economics alumni community"
          />
        </div>
      </div>
    </section>
  );
}

export default AlumniOpportunitiesSection;