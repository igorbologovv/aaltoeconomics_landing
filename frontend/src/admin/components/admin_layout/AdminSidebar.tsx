import { NavLink, useNavigate } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar__brand">
        <span className="admin-sidebar__title">Aalto Economics</span>
        <span className="admin-sidebar__subtitle">Admin Panel</span>
      </div>

      <nav className="admin-sidebar__nav">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar__link admin-sidebar__link--active"
              : "admin-sidebar__link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/home-content"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar__link admin-sidebar__link--active"
              : "admin-sidebar__link"
          }
        >
          Home Content
        </NavLink>

        <NavLink
          to="/admin/join-us-content"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar__link admin-sidebar__link--active"
              : "admin-sidebar__link"
          }
        >
          Join Us Content
        </NavLink>

        <NavLink
          to="/admin/career-stories"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar__link admin-sidebar__link--active"
              : "admin-sidebar__link"
          }
        >
          Career Stories
        </NavLink>

        <NavLink
          to="/admin/contact-people"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar__link admin-sidebar__link--active"
              : "admin-sidebar__link"
          }
        >
          Contact People
        </NavLink>

        <NavLink
          to="/admin/open-positions"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar__link admin-sidebar__link--active"
              : "admin-sidebar__link"
          }
        >
          Open Positions
        </NavLink>

        <NavLink
          to="/admin/membership-applications"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar__link admin-sidebar__link--active"
              : "admin-sidebar__link"
          }
        >
          Membership Applications
        </NavLink>
      </nav>

      <button
        type="button"
        className="admin-sidebar__logout"
        onClick={handleLogout}
      >
        Log out
      </button>
    </aside>
  );
}

export default AdminSidebar;