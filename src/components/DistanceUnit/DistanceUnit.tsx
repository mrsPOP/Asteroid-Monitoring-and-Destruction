"use client";

import { useDistanceUnitStore } from "@/hooks/useStore";
import styles from "./DistanceUnit.module.css";
import classNames from "classnames";

const DistanceUnit = () => {
  const { inKilometers, switchInKilometers } = useDistanceUnitStore();

  return (
    <div className={styles["container"]}>
      <button
        className={classNames(
          styles["general-for-button"],
          { [styles["selected"]]: inKilometers },
          { [styles["not-selected"]]: !inKilometers }
        )}
        onClick={switchInKilometers}
      >
        в километрах
      </button>
      <span>|</span>
      <button
        className={classNames(
          styles["general-for-button"],
          { [styles["selected"]]: !inKilometers },
          { [styles["not-selected"]]: inKilometers }
        )}
        onClick={switchInKilometers}
      >
        в лунных орбитах
      </button>
    </div>
  );
};

export default DistanceUnit;
