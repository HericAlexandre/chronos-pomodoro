import { FolderGit2Icon } from 'lucide-react';
import { RouterLink } from '../RouterLink';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <RouterLink
        href='/about-pomodoro/'
        className={`${styles.footerContent} ${styles.linkPomodoro}`}
      >
        O que é a técnica de Pomodoro?
      </RouterLink>

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
