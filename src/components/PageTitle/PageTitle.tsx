import styles from "./PageTitle.module.css"

const PageTitle = () => {
  return (
    <h1 className={styles["title"]}>
      Ближайшие подлёты астероидов
    </h1>
  );
};

export default PageTitle;
