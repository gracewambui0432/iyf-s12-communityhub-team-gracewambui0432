import PostCard from './PostCard';

export default function PostList({ posts, likedPosts, onLike }) {
  if (!posts.length) return <p>No posts found.</p>;
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} liked={likedPosts.includes(post.id)} onLike={onLike} />
      ))}
    </div>
  );
}