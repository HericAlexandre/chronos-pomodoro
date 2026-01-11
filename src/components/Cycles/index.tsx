import styles from "./styles.module.css";

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span className={styles.titulo}>Ciclos:</span>
      <div className={styles.cyclesDotsContainer}>
        <span className={`${styles.cyclesDots} ${styles.working}`}></span>
        <span className={`${styles.cyclesDots} ${styles.onBreak}`}></span>
        <span className={`${styles.cyclesDots} ${styles.working}`}></span>
        <span className={`${styles.cyclesDots} ${styles.onBreak}`}></span>
        <span className={`${styles.cyclesDots} ${styles.working}`}></span>
        <span className={`${styles.cyclesDots} ${styles.onBreak}`}></span>
        <span className={`${styles.cyclesDots} ${styles.working}`}></span>
        <span className={`${styles.cyclesDots} ${styles.onLongBreak}`}></span>
      </div>
    </div>
  );
}
