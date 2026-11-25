import './App.css'
import { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Sidebar from './components/Layout/Sidebar';
import PostList from './components/Post/PostList';
import CreatePost from './components/Post/CreatePost';
import { sortNewestFirst, searchPosts } from './utils/posts';

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Welcome to CommunityHub', content: 'Share your ideas here!', excerpt: 'Share your ideas here!', author: 'Claire', date: '2026-11-20', likes: 5 },
    { id: 2, title: 'Learn React', content: 'React is fun!', excerpt: 'React is fun!', author: 'Grace', date: '2026-11-20', likes: 3 },
  ]);
  const [search, setSearch] = useState('');
  const handleLike = (id) => setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  const handleDelete = (id) => setPosts(posts.filter(p => p.id !== id));
  const handleAdd = (newPost) => setPosts([newPost, ...posts]);
  const visiblePosts = searchPosts(sortNewestFirst(posts), search);

  useEffect(() => {
    document.querySelectorAll('img:not([alt])').forEach(img => {
      img.setAttribute('alt', 'CommunityHub image');
    });
    document.querySelectorAll('button:not([aria-label])').forEach((btn, i) => {
      if (!btn.textContent.trim()) btn.setAttribute('aria-label', `Button ${i + 1}`);
    });
  }, []);

  return (
    <div>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content">
        <label htmlFor="search-posts">Search posts</label>
        <input
          id="search-posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts..."
          aria-label="Search posts"
        />
        <CreatePost onAddPost={handleAdd} />
        <PostList posts={visiblePosts} onLike={handleLike} onDelete={handleDelete} />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}