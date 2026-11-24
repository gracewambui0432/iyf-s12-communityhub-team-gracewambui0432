import { useNavigate, NavLink } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data
    navigate('/');
  };

  return (
    <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/posts" className={({ isActive }) => (isActive ? 'active' : '')}>
        Posts
      </NavLink>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}