import "../styles/admin.css";

export default function AdminDashboardPage() {
  return (
    <section className="admin-page">
      <div className="admin-page__header">
        <h1>Dashboard</h1>
        <p>Manage content for the Aalto Economics website.</p>
      </div>

      <div className="admin-cards">
        <article className="admin-card">
          <h2>Career Stories</h2>
          <p>Create, edit, publish, and reorder stories.</p>
        </article>

        <article className="admin-card">
          <h2>Contact People</h2>
          <p>Manage board members, roles, emails, and profile images.</p>
        </article>

        <article className="admin-card">
          <h2>Open Positions</h2>
          <p>Update job posts, companies, deadlines, and application links.</p>
        </article>
      </div>
    </section>
  );
}