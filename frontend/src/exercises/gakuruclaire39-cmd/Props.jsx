// Task 15.3: Working with Props
// By Claire Gakuru - gakuruclaire39-cmd

// ===== EXERCISE 1: Passing Props =====
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

// Alternative using props object (for reference)
function GreetingAlt(props) {
  return <h2>Hello, {props.name}!</h2>;
}

// ===== EXERCISE 2: Dynamic PostCard =====
function PostCard({ title, excerpt, author, date }) {
  return (
    <article className="post-card">
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <div className="post-meta">
        <span>By {author}</span> | <span>{date}</span>
      </div>
    </article>
  );
}

// ===== EXERCISE 3: Rendering Lists =====
function PostList() {
  const posts = [
    { id: 1, title: "Getting Started with React", excerpt: "Learn the basics of React...", author: "Amina Otieno", date: "Jan 15, 2026" },
    { id: 2, title: "JavaScript Best Practices", excerpt: "Write cleaner code...", author: "Brian Kamau", date: "Jan 10, 2026" },
    { id: 3, title: "First Post", excerpt: "This is my first post...", author: "Alice", date: "Jan 15" },
    { id: 4, title: "Second Post", excerpt: "This is my second post...", author: "Bob", date: "Jan 14" },
    { id: 5, title: "Third Post", excerpt: "This is my third post...", author: "Charlie", date: "Jan 13" },
  ];

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
}

// ===== EXERCISE 4: Props Default Values & Destructuring =====
function Button({
  text = "Click me",
  variant = "primary",
  size = "medium",
  disabled = false,
}) {
  return (
    <button className={`btn btn-${variant} btn-${size}`} disabled={disabled}>
      {text}
    </button>
  );
}

// ===== MAIN APP - Shows Everything Together =====
export default function PropsTask() {
  return (
    <div>
      <h1>Task 15.3: Working with Props</h1>

      <h2>Exercise 1: Greeting</h2>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />

      <h2>Exercise 2 & 3: PostCard + List</h2>
      <PostList />

      <h2>Exercise 4: Buttons with Defaults</h2>
      <Button text="Submit" variant="primary" />
      <Button text="Cancel" variant="secondary" />
      <Button text="Delete" variant="danger" />
      <Button />
    </div>
  );
}
