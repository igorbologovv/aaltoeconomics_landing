import "../styles/components/footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer">
        <div className="footer__contact">
          <h3 className="footer__title">Contact Info</h3>

          <div className="footer__contact-text">
            <p>Aalto Economics ry</p>
            <p>Konemiehentie 4</p>
            <p>02150 Espoo</p>
            <p>
              <a href="mailto:aaltoeconomics@ky.fi">aaltoeconomics@ky.fi</a>
            </p>
          </div>

          <img
            src="/images/aalto-logo.png"
            alt="Aalto Economics logo"
            className="footer__brand-logo"
          />
        </div>

        <div className="footer__partners">
          <h3 className="footer__title">Aalto Economics Partners</h3>

          <div className="footer__logos">
            <div className="footer__logo-slot">
              <img
                src="/images/partners/bcg.png"
                alt="BCG"
                className="footer__logo-image footer__logo-image--bcg"
              />
            </div>

            <div className="footer__logo-slot">
              <img
                src="/images/partners/evli.png"
                alt="EVLI"
                className="footer__logo-image footer__logo-image--evli"
              />
            </div>

            <div className="footer__logo-slot">
              <img
                src="/images/partners/bain.png"
                alt="Bain & Company"
                className="footer__logo-image footer__logo-image--bain"
              />
            </div>

            <div className="footer__logo-slot">
              <img
                src="/images/partners/august.png"
                alt="August"
                className="footer__logo-image footer__logo-image--august"
              />
            </div>

            <div className="footer__logo-slot">
              <img
                src="/images/partners/bearingpoint.png"
                alt="BearingPoint"
                className="footer__logo-image footer__logo-image--bearingpoint"
              />
            </div>

            <div className="footer__logo-slot">
              <img
                src="/images/partners/ey.png"
                alt="EY"
                className="footer__logo-image footer__logo-image--ey"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;