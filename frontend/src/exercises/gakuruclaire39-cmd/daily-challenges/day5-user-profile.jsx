import { useState, useEffect } from "react";
import Day3Tabs from "./day3-tabs";

export default function Day5UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((r) => { if (!r.ok) throw new Error("Failed"); return r.json(); })
      .then((d) => { setUser(d); setLoading(false); })
      .catch(() => { setError("Failed to load user"); setLoading(false); });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Day 5: User Profile</h2>
      <p>{user.name} - {user.email}</p>
      <p>{user.company.name} | {user.address.city}</p>
      <Day3Tabs tabs={[
        { label: "Info", content: `${user.phone} - ${user.website}` },
        { label: "Posts", content: "Posts will go here" },
        { label: "Todos", content: "Todos will go here" },
      ]} />
    </div>
  );
}