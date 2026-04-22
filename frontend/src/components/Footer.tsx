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

          <div className="footer__logos footer__logos--desktop">
            <div className="footer__logos-row footer__logos-row--desktop-top">
              <a
                className="footer__partner footer__partner--bcg"
                href="https://www.bcg.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="BCG"
              >
                <img
                  src="/images/partners/bcg.png"
                  alt="BCG"
                  className="footer__logo-image"
                />
              </a>

              <a
                className="footer__partner footer__partner--evli"
                href="https://www.evli.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Evli"
              >
                <img
                  src="/images/partners/evli.png"
                  alt="EVLI"
                  className="footer__logo-image"
                />
              </a>

              <a
                className="footer__partner footer__partner--august"
                href="https://august.fi/"
                target="_blank"
                rel="noreferrer"
                aria-label="August"
              >
                <img
                  src="/images/partners/august.png"
                  alt="August"
                  className="footer__logo-image"
                />
              </a>
            </div>

            <div className="footer__logos-row footer__logos-row--desktop-middle">
              <a
                className="footer__partner footer__partner--bearingpoint"
                href="https://www.bearingpoint.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="BearingPoint"
              >
                <img
                  src="/images/partners/bearingpoint.png"
                  alt="BearingPoint"
                  className="footer__logo-image"
                />
              </a>
            </div>

            <div className="footer__logos-row footer__logos-row--desktop-bottom">
              <a
                className="footer__partner footer__partner--ey"
                href="https://www.ey.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="EY"
              >
                <img
                  src="/images/partners/ey.png"
                  alt="EY"
                  className="footer__logo-image"
                />
              </a>
            </div>
          </div>

          <div className="footer__logos-mobile">
            <div className="footer__logos-row footer__logos-row--top">
              <a
                className="footer__partner footer__partner--bcg"
                href="https://www.bcg.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="BCG"
              >
                <img
                  src="/images/partners/bcg.png"
                  alt="BCG"
                  className="footer__logo-image"
                />
              </a>

              <a
                className="footer__partner footer__partner--evli"
                href="https://www.evli.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Evli"
              >
                <img
                  src="/images/partners/evli.png"
                  alt="EVLI"
                  className="footer__logo-image"
                />
              </a>

              <a
                className="footer__partner footer__partner--august"
                href="https://august.fi/"
                target="_blank"
                rel="noreferrer"
                aria-label="August"
              >
                <img
                  src="/images/partners/august.png"
                  alt="August"
                  className="footer__logo-image"
                />
              </a>
            </div>

            <div className="footer__logos-row footer__logos-row--middle">
              <a
                className="footer__partner footer__partner--bearingpoint"
                href="https://www.bearingpoint.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="BearingPoint"
              >
                <img
                  src="/images/partners/bearingpoint.png"
                  alt="BearingPoint"
                  className="footer__logo-image"
                />
              </a>
            </div>

            <div className="footer__logos-row footer__logos-row--bottom">
              <a
                className="footer__partner footer__partner--ey"
                href="https://www.ey.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="EY"
              >
                <img
                  src="/images/partners/ey.png"
                  alt="EY"
                  className="footer__logo-image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;