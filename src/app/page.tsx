import styles from "./page.module.css";
import AsteroidsList from "@/components/AsteroidsList/AsteroidsList";
import DistanceUnit from "@/components/DistanceUnit/DistanceUnit";
import PageTitle from "@/components/PageTitle/PageTitle";
import Cart from "@/components/Cart/Cart";
import RenderedAsteroids from "@/components/RenderedAsteroids/RenderedAsteroids";
import { getAsteroidsList } from "@/utils/helperFunctions";

export default async function Home() {
  const data = await getAsteroidsList();

  let firstStaticAsteroidsData: AsteroidInfo[];
  let notRenderedAstroids: AsteroidInfo[] = [];

  if (data.length > 8) {
    firstStaticAsteroidsData = data.slice(-8);
    notRenderedAstroids = data.slice(0, -8);
  } else {
    firstStaticAsteroidsData = data;
  }

  return (
    <main className={styles.main}>
      <PageTitle />
      <DistanceUnit />
      <RenderedAsteroids firstStaticAsteroidsData={firstStaticAsteroidsData}/>
      <AsteroidsList notRenderedAstroids={notRenderedAstroids}/>
      <Cart />
    </main>
  );
}
