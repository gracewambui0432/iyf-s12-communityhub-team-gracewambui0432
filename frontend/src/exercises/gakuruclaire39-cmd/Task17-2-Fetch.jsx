import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

// Exercise 1: Direct useEffect fetch
export function PostListDirect() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setPosts(data.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h3>Direct Fetch (10 posts)</h3>
      {posts.map(post => (
        <article key={post.id}><h4>{post.title}</h4><p>{post.body.slice(0, 100)}...</p></article>
      ))}
    </div>
  );
}

// Exercise 2: With custom hook
export function PostListWithHook() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h3>With useFetch Hook (10 posts)</h3>
      {posts.slice(0, 10).map(post => (
        <article key={post.id}><h4>{post.title}</h4><p>{post.body.slice(0, 100)}...</p></article>
      ))}
    </div>
  );
}

export default function Task17_2_Fetch() {
  return (
    <div>
      <h2>17.2 - Data Fetching</h2>
      <PostListDirect />
      <hr />
      <PostListWithHook />
    </div>
  );
}