import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '20px', padding: '15px', background: '#111', color: 'white' }}>
        <Link to="/" style={{ color: 'white' }}>Home</Link>
        <Link to="/posts" style={{ color: 'white' }}>Posts</Link>
        <Link to="/create" style={{ color: 'white' }}>Create Post</Link>
        <Link to="/about" style={{ color: 'white' }}>About</Link>
      </nav>
      <main style={{ padding: '20px' }}>{children}</main>
    </div>
  )
}