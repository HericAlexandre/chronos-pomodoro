import { useState } from "react";
import {
  HistoryIcon,
  HouseIcon,
  HouseHeartIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from "lucide-react";
import styles from "./styles.module.css";

export function Menu() {
  const [houseActive, setHouseActive] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setHouseActive(!houseActive);
        }}
      >
        {houseActive ? <HouseHeartIcon /> : <HouseIcon />}
      </a>

      <a className={styles.menuLink} href="#">
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setLightMode(!lightMode);
        }}
      >
        {lightMode ? <SunIcon /> : <MoonIcon />}
      </a>
    </nav>
  );
}
