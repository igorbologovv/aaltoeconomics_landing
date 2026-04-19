import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLoginSection() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="admin-login-section">
      <div className="admin-login-section__card">
        <h1 className="admin-login-section__title">Admin login</h1>
        <p className="admin-login-section__text">
          Sign in to access the Aalto Economics admin panel.
        </p>

        <form
          className="admin-login-section__form"
          onSubmit={(event) => {
            event.preventDefault();

            if (!email.trim() || !password.trim()) {
              return;
            }

            localStorage.setItem("adminAuth", "true");
            navigate("/admin");
          }}
        >
          <label className="admin-login-section__field">
            <span>Email</span>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="admin@aaltoeconomics.fi"
            />
          </label>

          <label className="admin-login-section__field">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
            />
          </label>

          <button type="submit" className="admin-login-section__button">
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdminLoginSection;