import React from "react";
import styles from "./PageTitle.module.css"

const PageTitle = () => {
  return (
    <p className={styles["title"]}>
      Ближайшие подлёты астероидов
    </p>
  );
};

export default PageTitle;
