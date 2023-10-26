"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/hooks/useStore";
import AsteroidItem from "@/components/AsteroidItem/AsteroidItem";
import styles from "./styles.module.css";

const OrderPage = () => {
  const { cart, clearCart } = useCartStore();

  const [cartCopy, _] = useState(Array.from(cart));

  useEffect(() => () => clearCart(), []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Заказ отправлен!</h1>(
      <ul className={styles.list}>
        {cartCopy.map(([key, value]) => (
          <AsteroidItem key={key} data={value} />
        ))}
      </ul>
      )
    </div>
  );
};

export default OrderPage;
