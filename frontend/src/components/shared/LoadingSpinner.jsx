function LoadingSpinner({ text = 'Loading...' }) {
    return (
        <div role="status" aria-live="polite" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px' }}>
            <div style={{ width: '40px', height: '40px', border: '4px solid #e5e4e7', borderTop: '4px solid #007bff', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
            <p style={{ marginTop: '12px', color: '#6b6375' }}>{text}</p>
        </div>
    );
}

export default LoadingSpinner;