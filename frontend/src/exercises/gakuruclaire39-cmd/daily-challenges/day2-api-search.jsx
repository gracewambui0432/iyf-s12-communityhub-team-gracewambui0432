import { useState, useEffect } from "react";

export default function Day2ApiSearch() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data.filter((u) => u.name.toLowerCase().includes(query.toLowerCase())));
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div>
      <h2>Day 2: API Search</h2>
      <input placeholder="Search users..." value={query} onChange={(e) => setQuery(e.target.value)} />
      {loading ? <p>Loading...</p> : users.map((u) => <p key={u.id}>{u.name} - {u.email}</p>)}
    </div>
  );
}