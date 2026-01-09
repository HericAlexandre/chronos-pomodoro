import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Logo() {
  return <h2 className={styles.logo}>
    <a className={styles.logoLink} href="#">
      <TimerIcon />
      <span>Chronos Pomodoro</span>
    </a>
  </h2>;
}
