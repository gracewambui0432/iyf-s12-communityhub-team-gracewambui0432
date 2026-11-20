function DashboardLayout() {
  return (
    <div>
      <header style={{ background: "#6A1B9A", color: "white", padding: "20px", textAlign: "center" }}>
        <h1>Community Hub Dashboard</h1>
      </header>
      <div style={{ display: "flex" }}>
        <aside style={{ background: "#EDE7F6", width: "200px", padding: "20px" }}>
          <p>🏠 Home</p>
          <p>👥 Members</p>
          <p>📅 Events</p>
          <p>⚙️ Settings</p>
        </aside>
        <main style={{ flex: 1, padding: "20px" }}>
          <h2>Welcome Grace!</h2>
          <p>This is your main content area. Here you will see all community updates.</p>
        </main>
      </div>
      <footer style={{ background: "#333", color: "white", padding: "15px", textAlign: "center" }}>
        © 2026 Community Hub - Made by Grace
      </footer>
    </div>
  );
}

export default DashboardLayout;
