import "./PageLayout.css";

function Header() {
  return <header className="layout-header">🌐 CommunityHub - Header</header>;
}

function Footer() {
  return <footer className="layout-footer">© 2026 CommunityHub - Footer</footer>;
}

function PageLayout({ children, sidebar }) {
  return (
    <div className="layout">
      <Header />
      <div className="layout-body">
        {sidebar && <aside className="layout-sidebar">{sidebar}</aside>}
        <main className="layout-main">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default PageLayout;