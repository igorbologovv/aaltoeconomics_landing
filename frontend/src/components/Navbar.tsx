import { Link, NavLink } from "react-router-dom";
import "../styles/components/navbar.css";

function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-container nav">
        <Link to="/" className="brand" aria-label="Aalto Economics home">
          <img
            src="/images/aalto-logo.png"
            alt="Aalto Economics logo"
            className="brand__mark"
          />
          <span className="brand__divider" aria-hidden="true" />
          <span className="brand__text">
            <span>Aalto</span>
            <span>Economics</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/join-us">Join Us</NavLink>
          <NavLink to="/for-alumni">For Alumni</NavLink>
          <NavLink to="/career-stories">Career Stories</NavLink>
          <NavLink to="/open-positions">Open Positions</NavLink>
          <NavLink to="/for-companies">For Companies</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;