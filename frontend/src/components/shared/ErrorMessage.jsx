import styles from './ErrorMessage.module.css';

function ErrorMessage({ message, onRetry }) {
  return (
    <div className={styles.box} role="alert">
      <p className={styles.text}>⚠️ {message}</p>
      {onRetry && <button onClick={onRetry} className={styles.retryBtn}>Try Again</button>}
    </div>
  );
}
export default ErrorMessage;