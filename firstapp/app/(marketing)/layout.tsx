import { FC, ReactNode } from "react";
import styles from "../page.module.css";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};
export default Layout;
