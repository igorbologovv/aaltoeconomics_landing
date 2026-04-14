function JoinQuoteSection() {
  return (
    <section className="join-quote">
      <div className="container join-quote__grid">
        <div className="join-quote__text-wrap">
          <div className="join-quote__icon" aria-hidden="true">
            “
          </div>

          <blockquote className="join-quote__text">
            At the School of Economics, we value innovation, integrity, and
            collaboration. We empower students to think critically, embrace
            diversity, and tackle global challenges.
          </blockquote>

          <p className="join-quote__author">Iikka Korhonen</p>
        </div>

        <div className="join-quote__image-wrap">
          <img
            className="join-quote__image"
            src="/images/join/iikka-korhonen.jpg"
            alt="Portrait of Iikka Korhonen"
          />
        </div>
      </div>
    </section>
  );
}

export default JoinQuoteSection;