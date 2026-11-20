import PostCard from './PostCard';
export default function PostList({ posts, onLike, onDelete }) {
  if (posts.length === 0) return <p>No posts yet.</p>;
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} onLike={onLike} onDelete={onDelete} />
      ))}
    </div>
  );
}
