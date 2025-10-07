// components/Navbar.tsx
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <h1 className={styles.navbarTitle}>Finance Assistant</h1>
      </div>
    </nav>
  );
}