export default function Card({ children }) {
  return <div style={{ background: 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '12px' }}>{children}</div>;
}