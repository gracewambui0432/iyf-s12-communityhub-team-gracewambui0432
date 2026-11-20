function Button({ text, onClick, variant = "primary", disabled = false, size = "medium", loading = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`btn btn-${variant} btn-${size} ${loading ? "btn-loading" : ""}`}
    >
      {loading ? (
        <>
          <span className="spinner"></span> Loading...
        </>
      ) : (
        text
      )}
    </button>
  );
}

export default Button;