import "./Card.css";

function Card({ title, children, variant = "primary" }) {
  return (
    <div className={`card card-${variant}`}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}
export default Card;