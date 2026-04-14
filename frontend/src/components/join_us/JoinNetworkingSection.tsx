function JoinNetworkingSection() {
  return (
    <section className="join-networking">
      <div className="container join-networking__grid">
        <div className="join-networking__image-wrap">
          <img
            className="join-networking__image"
            src="/images/join/networking.jpg"
            alt="Aalto Economics networking event"
          />
        </div>

        <div className="join-networking__text">
          <p className="section-label">Networking</p>

          <h2>Networking</h2>

          <p className="join-networking__lead">
            Networking at Aalto Economics goes beyond the classroom.
          </p>

          <p>
            Our vibrant community of students, alumni, and industry experts
            fosters meaningful connections, opening doors to mentorship,
            collaborations, and career opportunities in the world of economics.
          </p>
        </div>
      </div>
    </section>
  );
}

export default JoinNetworkingSection;