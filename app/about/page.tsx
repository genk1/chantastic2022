/**
 * without 'use client', we cannot use hooks or any and logs will be shown in terminal or server-side.
 * but with it, they will be shown in client-side.
 */
"use client";
import { useEffect, useState } from "react";
import styles from "../page.module.css";

/**
 * accessible here because the file name is page.tsx or page.xxx
 */
export default function About() {
  console.log("where does this log?");
  const [val, setVal] = useState(false);
  useEffect(() => {
    console.log("hahaha");
  });
  useEffect(() => {
    console.log("val", val);
  }, [val]);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>about/PAGE.tsx</h1>
        <button
          onClick={() => {
            setVal((prev) => !prev);
          }}
        >
          CLICK here
        </button>
      </main>
    </div>
  );
}
