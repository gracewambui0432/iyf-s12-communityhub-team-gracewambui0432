import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

function ClaireHome() {
  return (
    <div>
      <h2>17.3 - Home</h2>
      <p>Welcome to CommunityHub - Claire's Router Demo</p>
      <Link to="/claire/posts">View Posts</Link> | <Link to="/claire/about">About</Link>
    </div>
  );
}

function ClairePosts() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h2>Claire's Posts</h2>
      {posts.slice(0, 10).map(post => (
        <article key={post.id}>
          <h4>{post.title}</h4>
          <Link to={`/claire/posts/${post.id}`}>Read More →</Link>
        </article>
      ))}
    </div>
  );
}

function ClairePostDetail() {
  const { postId } = useParams();
  const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>Post not found</p>;
  return (
    <div>
      <Link to="/claire/posts">← Back</Link>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

function ClaireAbout() {
  return <div><h2>About</h2><p>Built by Claire - Task 17.3 Router</p></div>;
}

export default function Task17_3_Router() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <Link to="/claire">Home</Link>
        <Link to="/claire/posts">Posts</Link>
        <Link to="/claire/about">About</Link>
      </nav>
      <Routes>
        <Route path="/claire" element={<ClaireHome />} />
        <Route path="/claire/posts" element={<ClairePosts />} />
        <Route path="/claire/posts/:postId" element={<ClairePostDetail />} />
        <Route path="/claire/about" element={<ClaireAbout />} />
        <Route path="*" element={<p>Page not found - Claire's Router</p>} />
      </Routes>
    </BrowserRouter>
  );
}