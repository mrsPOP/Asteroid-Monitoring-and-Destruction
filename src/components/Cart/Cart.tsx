"use client";

import { useCartStore } from "@/hooks/useStore";
import { useAsteroidsListStore } from "@/hooks/useStore";
import { asteroidDeclensions } from "@/utils/constants";
import styles from "./Cart.module.css";
import { useRouter } from "next/navigation";
import classNames from "classnames";

const Cart = () => {
  const {cart, clearCart} = useCartStore();
  const { removeaAsteroids } = useAsteroidsListStore();
  const router = useRouter();

  function handleSend () {
    removeaAsteroids(Array.from(cart.keys()));
    router.push("/order-status");
    // clearCart();
  } 

  return (
    <div className={styles["cart-container"]}>
      <h2 className={styles["cart-title"]}>Корзина</h2>
      <p className={styles["asteriods-number"]}>{`${cart.size} ${
        asteroidDeclensions[cart.size % 10]
      }`}</p>
      <button
        className={classNames(styles["send-button"], {
          [styles["disabled-btn"]]: cart.size === 0,
        })}
        onClick={handleSend}
        type="button"
      >
        Отправить
      </button>
    </div>
  );
};

export default Cart;
