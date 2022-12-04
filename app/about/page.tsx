import styles from '../page.module.css';

/**
 * accessible here because the file name is page.tsx or page.xxx
 */
export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>about/PAGE.tsx</h1>
      </main>
    </div>
  );
}
