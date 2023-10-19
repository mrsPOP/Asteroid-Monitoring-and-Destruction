"use client";

import { useCartStore } from "@/hooks/useStore";
import { asteroidDeclensions } from "@/utils/constants";
import styles from "./Cart.module.css";
import { useRouter } from "next/navigation";

const Cart = () => {
  const {cart} = useCartStore();
  const router = useRouter();

  return (
    <div className={styles["cart-container"]}>
      <h2 className={styles["cart-title"]}>Корзина</h2>
      <p className={styles["asteriods-number"]}>{`${cart.size} ${asteroidDeclensions[cart.size % 10]}`}</p>
      <button className={styles["send-button"]} onClick={() => router.push('/order-status')}>Отправить</button>
    </div>
  );
};

export default Cart;
