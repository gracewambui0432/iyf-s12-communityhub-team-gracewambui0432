function Greeting({ firstName, mood }) {
  return (
    <div style={{ background: "#FFF3E0", padding: "20px", borderRadius: "12px", borderLeft: "5px solid orange" }}>
      <h2>Welcome back, {firstName}! 👋</h2>
      <p>Today you are feeling: <b>{mood}</b></p>
      <p>Let's make today amazing!</p>
    </div>
  );
}

export default Greeting;
