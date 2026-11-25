import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <h1>Welcome to Community Hub</h1>
      <p>Share posts, like and connect with your community.</p>
      <Link to="/posts">View All Posts</Link>
    </div>
  )
}