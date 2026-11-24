import { useState, useEffect } from 'react';

// components/shared/LoadingSpinner.jsx
function LoadingSpinner({ size = 'medium', text = 'Loading...' }) {
  return (
    <div className={`loading-spinner ${size}`}>
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
}

// components/shared/ErrorMessage.jsx
function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message">
      <span className="error-icon">⚠️</span>
      <p>{message}</p>
      {onRetry && <button onClick={onRetry}>Try Again</button>}
    </div>
  );
}

// Task 17.4 - PostList with Loading / Error / Empty states
export default function Task174PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPosts(); }, []);

  if (loading) return <LoadingSpinner text="Loading posts..." />;
  if (error) return <ErrorMessage message={error} onRetry={fetchPosts} />;
  if (posts.length === 0) return <p>No posts found.</p>;

  return (
    <div className="post-list">
      {posts.map(post => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}