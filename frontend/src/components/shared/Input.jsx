import styles from './Input.module.css';

function Input({ label, error, type = 'text', placeholder, value, onChange, onBlur, name, required = false }) {
    return (
        <div className={styles.group}>
            {label && (
                <label htmlFor={name} className={styles.label}>
                    {label} {required && <span className={styles.required}>*</span>}
                </label>
            )}
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`${styles.input} ${error ? styles.inputError : ''}`}
            />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
}

export default Input;