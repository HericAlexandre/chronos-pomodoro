import { useState, useEffect } from 'react';
import {
  HistoryIcon,
  HouseIcon,
  HouseHeartIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';
import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const savedTheme = localStorage.getItem('theme') as
      | AvailableThemes
      | 'dark';
    return savedTheme ?? 'dark';
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  const [houseActive, setHouseActive] = useState(false);

  function handleChangeTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    return () => {
      console.log('Função de cleanup do useEffect do tema foi executada!');
    };
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a página inicial'
        title='Home'
        onClick={e => {
          e.preventDefault();
          setHouseActive(!houseActive);
        }}
      >
        {houseActive ? <HouseHeartIcon /> : <HouseIcon />}
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para o histórico'
        title='Histórico'
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para as configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar o tema'
        title='Tema'
        onClick={handleChangeTheme}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
