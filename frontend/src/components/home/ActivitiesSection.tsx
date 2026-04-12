function ActivitiesSection() {
  return (
    <section className="activities-section">
      <div className="container activities-section__grid">
        <div className="activities-section__image-wrap">
          <img
            className="activities-section__image"
            src="/images/home/what-we-do.jpg"
            alt="Aalto Economics event"
          />
        </div>

        <div className="activities-section__text">
          <p className="section-label">Activities</p>
          <h2>What do we do?</h2>

          <p>
            We organize events for everyone interested in economics, including
            networking opportunities, company visits, panel discussions, and
            study trips. Most of our events are held in English.
          </p>

          <p>
            Our students’ well-being is a priority. We work closely with the
            department and make sure student voices are heard while creating
            meaningful activities around economics.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ActivitiesSection;