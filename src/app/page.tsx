import styles from './page.module.css';
import AsteroidsList from '@/components/AsteroidsList';

export default async function Home() {
  return (
    <main className={styles.main}>
      <AsteroidsList/>
    </main>
  )
}
