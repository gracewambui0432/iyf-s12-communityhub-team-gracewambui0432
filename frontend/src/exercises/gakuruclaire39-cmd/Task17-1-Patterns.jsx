import { useState, useEffect } from 'react';

// Pattern 1: Fetch on mount
export function UserProfile({ userId = 1 }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await res.json();
      setUser(data);
      setLoading(false);
    }
    fetchUser();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  return <div>User: {user?.name}</div>;
}

// Pattern 2: Event listener + cleanup
export function WindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <p>Window: {size.width} x {size.height}</p>;
}

// Pattern 3: localStorage sync
export function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme ({theme})
    </button>
  );
}

export default function Task17_1_Patterns() {
  return (
    <div>
      <h2>17.1 Exercise 2 - Patterns</h2>
      <UserProfile userId={1} />
      <WindowSize />
      <ThemeToggle />
    </div>
  );
}