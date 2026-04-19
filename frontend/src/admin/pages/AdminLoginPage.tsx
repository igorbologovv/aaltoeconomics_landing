import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/admin.css";

export default function AdminLoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      return;
    }

    localStorage.setItem("adminAuth", "true");
    navigate("/admin");
  };

  return (
    <section className="admin-login">
      <div className="admin-login__card">
        <h1 className="admin-login__title">Admin login</h1>
        <p className="admin-login__text">
          Sign in to access the Aalto Economics admin panel.
        </p>

        <form className="admin-login__form" onSubmit={handleSubmit}>
          <label className="admin-login__field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="admin@aaltoeconomics.fi"
            />
          </label>

          <label className="admin-login__field">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
            />
          </label>

          <button type="submit" className="admin-login__button">
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
}