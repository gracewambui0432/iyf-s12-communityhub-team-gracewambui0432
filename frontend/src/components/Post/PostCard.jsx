export default function PostCard({ post, onLike, onDelete }) {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.excerpt || post.content}</p>
      <p>By {post.author} | {post.date} | ❤️ {post.likes}</p>
      <button onClick={() => onLike(post.id)}>Like</button>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  );
}
