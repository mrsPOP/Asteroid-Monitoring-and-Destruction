import React from "react";
import styles from "./AboutSite.module.css";
import { Passion_One } from 'next/font/google';
import classNames from "classnames";

const passionOne = Passion_One({ subsets: ['latin'], weight: "400" });

const AboutSite = () => {
  return (
    <div className={styles["container"]}>
      <p className={classNames(styles["logo"], passionOne.className)}>ARMAGEDDON 2023</p>
      <p className={styles["about"]}>ООО “Команда им. Б. Уиллиса”.<br/>Взрываем астероиды с 1998 года.</p>
    </div>
  );
};

export default AboutSite;
