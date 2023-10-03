import { getAsteroidsInfo } from "@/utils/api";
import { NearEarthObject } from "./types";
import { AsteroidInfo } from "./types";

export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export async function getAsteroidsList() {
  const todayDate = new Date();
  const today = formatDate(todayDate);
  const sevenDaysAgo = formatDate(
    new Date(todayDate.setDate(todayDate.getDate() - 7))
  );

  const asteroidsInfo = await getAsteroidsInfo({
    startDate: today,
    endDate: sevenDaysAgo,
  });

  const asteroidsDataForSelectedDates = asteroidsInfo['near_earth_objects'];
  const asteroidsList: AsteroidInfo[] = []; 

  for (const date in asteroidsDataForSelectedDates) {
    asteroidsDataForSelectedDates[date].forEach((asteroidInfo: NearEarthObject)  => {
      asteroidsList.push({
        id: asteroidInfo['id'],
        date: date,
        maxDiameterInMeters: asteroidInfo['estimated_diameter']['meters']["estimated_diameter_max"],
        isHazardous: asteroidInfo['is_potentially_hazardous_asteroid'],
        distanceInKilometers: Math.round(Number(asteroidInfo['close_approach_data'][0]['miss_distance']['kilometers'])),
        lunarDistance: Math.round(Number(asteroidInfo['close_approach_data'][0]['miss_distance']['lunar'])),
        cartButton: false,
      })
    });
  }

  return asteroidsList;
}