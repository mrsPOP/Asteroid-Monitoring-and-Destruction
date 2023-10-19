"use client";

import { useDistanceUnitStore, useCartStore } from "@/hooks/useStore";
import Image from "next/image";
import stone from "../../../public/stone.svg";
import styles from "./AsteroidItem.module.css";
import classNames from "classnames";

const AsteroidItem = ({ data }: { data: AsteroidInfo }) => {
  const inKilometers = useDistanceUnitStore((state) => state.inKilometers);
  const cart = useCartStore((state) => state.cart);
  const setNewCartItem = useCartStore((state) => state.setNewCartItem);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  function switchCartStateForAsteroid() {
    cart.has(data.id) ? removeFromCart(data.id) : setNewCartItem(data.id);
  }

  return (
    <li className={styles["list-item"]}>
      <p className={styles["date"]}>{data.date}</p>
      <div className={styles["first-container"]}>
        <p className={styles["distance"]}>
          {inKilometers
            ? `${data.distanceInKilometers.toLocaleString("ru-RU")} км`
            : `${data.lunarDistance} лунные орбиты`}
        </p>
        <Image
          className={classNames(
            { [styles["big-stone"]]: data.maxDiameterInMeters > 100 },
            { [styles["small-stone"]]: !(data.maxDiameterInMeters > 100) }
          )}
          src={stone}
          alt="Stone picture"
        />
        <p className={styles["diameter"]}>
          &Oslash;{` ${data.maxDiameterInMeters.toFixed()} м`}
        </p>
      </div>
      <div className={styles["second-container"]}>
        <button
          className={styles["button"]}
          type="button"
          onClick={switchCartStateForAsteroid}
        >
          {cart.has(data.id) ? "В корзине" : "Заказать"}
        </button>
        {data.isHazardous ? (
          <p className={styles["danger-sign"]}>⚠️ Опасен</p>
        ) : (
          ""
        )}
      </div>
    </li>
  );
};

export default AsteroidItem;
