import { FolderGit2Icon } from 'lucide-react';
import styles from './styles.module.css';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <Link to='/about-pomodoro/' className={`${styles.footerContent} ${styles.linkPomodoro}`}>
        O que é a técnica de Pomodoro?
      </Link>

      <p className={styles.footerContent}>
        &copy; {new Date().getFullYear()} - Chronos Pomodoro. Desenvolvido por{' '}
        <a
          className={styles.linkGit}
          href='https://github.com/HericAlexandre/chronos-pomodoro'
          target='blank'
        >
          Herick Alexandre <FolderGit2Icon />
        </a>
      </p>
    </footer>
  );
}
