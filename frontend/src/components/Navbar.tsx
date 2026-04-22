import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/components/navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 980) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="site-header" ref={navRef}>
      <div className="nav-container nav">
        <Link
          to="/"
          className="brand"
          aria-label="Aalto Economics home"
          onClick={closeMenu}
        >
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

        <button
          type="button"
          className={`nav-toggle ${isMenuOpen ? "nav-toggle--open" : ""}`}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="nav-toggle__line" />
          <span className="nav-toggle__line" />
          <span className="nav-toggle__line" />
        </button>

        <nav
          id="main-navigation"
          className={`nav-links ${isMenuOpen ? "nav-links--open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink to="/join-us" onClick={closeMenu}>
            Join Us
          </NavLink>
          <NavLink to="/for-alumni" onClick={closeMenu}>
            For Alumni
          </NavLink>
          <NavLink to="/career-stories" onClick={closeMenu}>
            Career Stories
          </NavLink>
          <NavLink to="/open-positions" onClick={closeMenu}>
            Open Positions
          </NavLink>
          <NavLink to="/for-companies" onClick={closeMenu}>
            For Companies
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;