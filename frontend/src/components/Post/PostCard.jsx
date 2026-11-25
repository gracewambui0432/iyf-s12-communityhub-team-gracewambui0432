import { Link } from 'react-router-dom';
import Card from '../shared/Card';
import Button from '../shared/Button';

export default function PostCard({ post, liked, onLike }) {
  return (
    <Card>
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 100)}...</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Link to={`/posts/${post.id}`}><Button>View</Button></Link>
        <button onClick={() => onLike(post.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px' }}>
          {liked ? '❤️' : '🤍'}
        </button>
      </div>
    </Card>
  );
}