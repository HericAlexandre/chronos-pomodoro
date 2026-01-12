import styles from "./styles.module.css";


export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <a className={styles.footerContent} href="#">O que é a técnica de Pomodoro?</a>
      <p className={styles.footerContent}>© 2024 Chronos Project. All rights reserved.</p>
    </footer>
  );
}