import { useState } from 'react';
export default function CreatePost({ onAddPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onAddPost({ id: Date.now(), title, content, excerpt: content.slice(0, 100), author: 'Grace', date: new Date().toLocaleDateString(), likes: 0 });
    setTitle(''); setContent('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Post title" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Post content" />
      <button type="submit">Create Post</button>
    </form>
  );
}
