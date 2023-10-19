"use client";

import { useCartStore } from "@/hooks/useStore";
import AsteroidItem from "@/components/AsteroidItem/AsteroidItem";
import styles from "./styles.module.css";

const OrderPage = () => {
  const cart = useCartStore((state) => state.cart) as Map<string, AsteroidInfo>;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Заказ отправлен!</h1>
      <ul className={styles.list}>
        {Array.from(cart).map(([key, value]: [string, AsteroidInfo]) => (
          <AsteroidItem key={key} data={value} />
        ))}
      </ul>
    </div>
  );
};

export default OrderPage;
