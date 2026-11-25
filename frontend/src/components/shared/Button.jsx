export default function Button({ children, onClick, type = 'button' }) {
  return <button type={type} onClick={onClick} style={{ padding: '8px 16px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>{children}</button>;
}