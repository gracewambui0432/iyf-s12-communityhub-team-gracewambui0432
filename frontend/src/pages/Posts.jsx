import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/useLocalStorage';
import PostList from '../components/Post/PostList';
import Input from '../components/shared/Input';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import ErrorMessage from '../components/shared/ErrorMessage';

export default function Posts() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  const [search, setSearch] = useState('');
  const [likedPosts, setLikedPosts] = useLocalStorage('likedPosts', []);
  const [localPosts] = useLocalStorage('newPosts', []);

  const allPosts = [...localPosts, ...(posts || [])];
  const filtered = allPosts.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  const toggleLike = (id) => {
    setLikedPosts(likedPosts.includes(id) ? likedPosts.filter((x) => x !== id) : [...likedPosts, id]);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>All Posts</h2>
      <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search posts..." />
      <div style={{ marginTop: '20px' }}>
        <PostList posts={filtered} likedPosts={likedPosts} onLike={toggleLike} />
      </div>
    </div>
  );

