function ProfileCard() {
  return (
    <div style={{ width: "280px", border: "1px solid #ddd", borderRadius: "15px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
      <img src="https://i.pravatar.cc/280?img=47" alt="Grace" style={{ width: "100%" }} />
      <div style={{ padding: "15px", textAlign: "center" }}>
        <h3>Grace Wambui</h3>
        <p style={{ color: "gray" }}>Frontend Developer | Nairobi</p>
        <button style={{ background: "#FF6B6B", color: "white", border: "none", padding: "8px 20px", borderRadius: "20px" }}>Follow</button>
      </div>
    </div>
  );
}

export default ProfileCard;
