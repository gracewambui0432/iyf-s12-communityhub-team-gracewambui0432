function TeamList() {
  const team = [
    { id: 1, name: "Grace", role: "Team Lead", city: "Ruiru" },
    { id: 2, name: "Claire", role: "Developer", city: "Nairobi" },
    { id: 3, name: "Kevin", role: "Designer", city: "Thika" },
    { id: 4, name: "Joy", role: "Tester", city: "Kiambu" },
  ];

  return (
    <div>
      <h2>Our Community Team</h2>
      {team.map((member) => (
        <div key={member.id} style={{ background: "#F3E8FF", margin: "8px 0", padding: "12px", borderRadius: "8px" }}>
          <strong>{member.name}</strong> - {member.role} from {member.city}
        </div>
      ))}
    </div>
  );
}

export default TeamList;
