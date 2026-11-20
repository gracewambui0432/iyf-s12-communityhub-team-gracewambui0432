// Task 15.4: Component Composition
// By Claire Gakuru

// ===== EXERCISE 1: Children Prop =====
function Card({ children, title }) {
  return (
    <div className="card">
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">{children}</div>
    </div>
  );
}

// ===== EXERCISE 2: Layout Component =====
function Header() {
  return <header><h2>My Blog</h2></header>;
}
function Footer() {
  return <footer><p>© 2026 Claire Gakuru</p></footer>;
}

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

// ===== EXERCISE 3: Conditional Rendering =====
function UserGreeting({ user }) {
  // Pattern 1: && operator + Pattern 2: Ternary
  return (
    <div>
      {user ? <p>Welcome, {user.name}!</p> : <p>Please log in</p>}
      {user && <p>You are logged in ✅</p>}
      {!user && <p>Please log in to continue</p>}
    </div>
  );
}

// Early return version
function UserGreetingEarly({ user }) {
  if (!user) {
    return <p>Please log in</p>;
  }
  return <p>Welcome, {user.name}!</p>;
}

// ===== MAIN =====
export default function CompositionTask() {
  return (
    <Layout>
      <h1>Task 15.4: Component Composition</h1>

      <h2>Exercise 1: Card with Children</h2>
      <Card title="Welcome">
        <p>This is the card content!</p>
        <button>Click me</button>
      </Card>

      <Card>
        <p>Card without title - just children</p>
      </Card>

      <h2>Exercise 3: Conditional Rendering</h2>
      <UserGreeting user={{ name: "Claire" }} />
      <UserGreeting user={null} />
      <UserGreetingEarly user={{ name: "Claire" }} />
    </Layout>
  );
}
