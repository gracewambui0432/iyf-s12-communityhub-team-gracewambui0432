import { useState } from "react";

export default function Day4ProtectedRoute() {
  const [user, setUser] = useState(localStorage.getItem("username") || "");
  const [name, setName] = useState("");

  const login = (e) => {
    e.preventDefault();
    localStorage.setItem("username", name);
    setUser(name);
  };
  const logout = () => {
    localStorage.removeItem("username");
    setUser("");
  };

  if (!user) {
    return (
      <form onSubmit={login}>
        <h2>Day 4: Login</h2>
        <input placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    );
  }
  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <p>This is protected content.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}