import styles from "./AboutSite.module.css";
import { Passion_One } from 'next/font/google';
import classNames from "classnames";
import Link from "next/link";

const passionOne = Passion_One({ subsets: ['latin'], weight: "400" });

const AboutSite = () => {
  return (
    <div className={styles["container"]}>
      <Link href='/' className={classNames(styles["logo"], passionOne.className)}>ARMAGEDDON 2023</Link>
      <p className={styles["about"]}>ООО “Команда им. Б. Уиллиса”.<br/>Взрываем астероиды с 1998 года.</p>
    </div>
  );
};

export default AboutSite;
