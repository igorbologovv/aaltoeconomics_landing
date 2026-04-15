function CompaniesRecruitmentSection() {
  return (
    <section className="companies-recruitment">
      <div className="container companies-recruitment__grid">
        <div className="companies-recruitment__text">
          <p className="section-label">Recruitment</p>

          <h2>Looking for new employees?</h2>

          <p>
            Aalto Economics represents economics students at Aalto University
            School of Business. Aalto Economics takes care of
            economics-minded students’ interests, well-being and future career
            paths.
          </p>

          <p>
            Aalto Economics arranges excursions, career events and informal
            events with different companies. Career Starter is the largest
            career night within KY’s subject clubs and is arranged every fall.
            We are also happy to arrange new kinds of events together with
            companies.
          </p>
        </div>

        <div className="companies-recruitment__image-wrap">
          <img
            className="companies-recruitment__image"
            src="/images/for_companies/aalto2.jpg"
            alt="Aalto University School of Business interior"
          />
        </div>
      </div>
    </section>
  );
}

export default CompaniesRecruitmentSection;