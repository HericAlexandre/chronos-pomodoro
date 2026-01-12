import { FolderGit2Icon } from 'lucide-react';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <a className={`${styles.footerContent} ${styles.linkPomodoro}`} href='#'>
        O que é a técnica de Pomodoro?
      </a>
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
