import { useState } from "react";

export default function Day3Tabs({ tabs = [
  { label: "Tab 1", content: "Content 1" },
  { label: "Tab 2", content: "Content 2" },
  { label: "Tab 3", content: "Content 3" },
] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <h2>Day 3: Tabs</h2>
      <div style={{ display: "flex", gap: "8px" }}>
        {tabs.map((t, i) => (
          <button key={i} onClick={() => setActive(i)} style={{ fontWeight: active === i ? "bold" : "normal" }}>
            {t.label}
          </button>
        ))}
      </div>
      <p>{tabs[active].content}</p>
    </div>
  );
}