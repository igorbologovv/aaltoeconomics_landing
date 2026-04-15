import { Link } from "react-router-dom";

function CompaniesResultsSection() {
  return (
    <section className="companies-results">
      <div className="container companies-results__grid">
        <div className="companies-results__image-wrap">
          <img
            className="companies-results__image"
            src="/images/for_companies/aalto1.jpg"
            alt="Aalto University School of Business interior"
          />
        </div>

        <div className="companies-results__text">
          <p className="section-label">Visibility</p>

          <h2>Get the best results!</h2>

          <p>
            Aalto Economics is the most effective way to reach economics’
            students in Aalto University School of Business. Through our
            targeted channels, you can reach hundreds of our students.
          </p>

          <p>
            For example, through our mailing list, we send job advertisements as
            well as event notifications. We also provide visibility on other
            channels, for example our Instagram page and website.
          </p>

          <p className="companies-results__contact">
            Feel free to contact us at{" "}
            <a href="mailto:aaltoeconomics@ky.fi">aaltoeconomics@ky.fi</a>
          </p>

          <div className="companies-results__actions">
            <Link to="/contact" className="primary-btn">
              Work With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompaniesResultsSection;