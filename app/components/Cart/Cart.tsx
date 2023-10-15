"use client";

import React from "react";
import { useCartStore } from "@/hooks/useStore";
import { asteroidDeclensions } from "@/utils/constants";
import styles from "./Cart.module.css";

const Cart = () => {
  const {cart} = useCartStore();


  return (
    <div className={styles["cart-container"]}>
      <h2 className={styles["cart-title"]}>Корзина</h2>
      <p className={styles["asteriods-number"]}>{`${cart.size} ${asteroidDeclensions[cart.size % 10]}`}</p>
      <button className={styles["send-button"]}>Отправить</button>
    </div>
  );
};

export default Cart;
