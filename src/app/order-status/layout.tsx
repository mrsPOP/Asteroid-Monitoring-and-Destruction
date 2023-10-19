import styles from "./styles.module.css";

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className={styles.wrapper}>
      {children}
      <p className={styles.text}>&copy; Все права и планета защищены.</p>
    </div>
  );
}