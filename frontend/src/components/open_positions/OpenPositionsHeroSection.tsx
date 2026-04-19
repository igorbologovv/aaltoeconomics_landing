function OpenPositionsHeroSection() {
  return (
    <section className="open-positions-hero">
      <div className="open-positions-hero__media">
        <img
          className="open-positions-hero__image"
          src="/images/open_positions/hero.jpg"
          alt="Open positions at Aalto Economics"
        />
        <div className="open-positions-hero__overlay" />
      </div>

      <div className="container open-positions-hero__content">
        <p className="open-positions-hero__eyebrow">Career opportunities</p>
        <h1 className="open-positions-hero__title">Open Positions</h1>
      </div>
    </section>
  );
}

export default OpenPositionsHeroSection;