import styles from "../../page.module.css";

/**
 * not accessible here because the file name is not page.xxx
 */
export default function SubRoute() {
  return (
    <div className={styles.container}>
      <h1>sub-route/page.tsx</h1>
    </div>
  );
}
