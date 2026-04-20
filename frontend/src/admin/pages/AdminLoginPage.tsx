import { useState } from "react";

import "../styles/admin_login/admin-login-section.css";

const API_URL = import.meta.env.VITE_API_URL;

function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage("");

    if (!username.trim() || !password.trim()) {
      setErrorMessage("Please enter both username and password.");
      return;
    }
    try {
      setIsSubmitting(true);

      const response = await fetch(`${API_URL}/api/admin/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message ?? "Login failed.");
        return;
      }

      localStorage.setItem("adminToken", data.token);
      window.location.href = "/admin";
    } catch {
      setErrorMessage("Unable to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="admin-login-section">
      <div className="admin-login-section__card">
        <h1 className="admin-login-section__title">Admin Login</h1>
        <p className="admin-login-section__text">
          Sign in to manage Aalto Economics website content.
        </p>

        <form className="admin-login-section__form" onSubmit={handleSubmit}>
          <label className="admin-login-section__field">
            <span>Username</span>
            <input
              type="text"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              disabled={isSubmitting}
            />
          </label>

          <label className="admin-login-section__field">
            <span>Password</span>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={isSubmitting}
            />
          </label>

          {errorMessage ? (
            <p
              style={{
                margin: 0,
                color: "#b42318",
                fontSize: "0.95rem",
              }}
            >
              {errorMessage}
            </p>
          ) : null}

          <button
            type="submit"
            className="admin-login-section__button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdminLoginPage;