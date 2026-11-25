import styles from './Avatar.module.css';

function Avatar({ name = 'User', src, size = 'medium' }) {
    const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
    if (src) return <img src={src} alt={`${name}'s avatar`} className={`${styles.avatar} ${styles[size]}`} />;
    return <div className={`${styles.avatar} ${styles[size]}`} aria-label={name}>{initials}</div>;
}

export default Avatar;