// Task 16.4: Lifting State Up
// By Grace Wambui

import { useState } from 'react';

// Parent component holds the state
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', likes: 0 },
    { id: 2, title: 'Second Post', likes: 0 },
  ]);

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

  return (
    <div>
      <Stats totalPosts={posts.length} totalLikes={totalLikes} />
      <PostList posts={posts} onLike={handleLike} />
    </div>
  );
}

// Child receives data via props
function Stats({ totalPosts, totalLikes }) {
  return (
    <div className="stats">
      <span>{totalPosts} posts</span>
      <span> | {totalLikes} total likes</span>
    </div>
  );
}

// Child receives data and callback
function PostList({ posts, onLike }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onLike={() => onLike(post.id)} />
      ))}
    </div>
  );
}

function PostCard({ post, onLike }) {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <button onClick={onLike}>❤️ {post.likes}</button>
    </div>
  );
}

export default function LiftingStateTask() {
  return (
    <div>
      <h1>Task 16.4: Lifting State Up</h1>
      <p>Shared State Between Components - Parent holds state, children get props</p>
      <App />
    </div>
  );
}
