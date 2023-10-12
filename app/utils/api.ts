import { API_KEY, NASA_API_URL } from "./constants";

export async function getAsteroidsInfo(dateRange: DateRange) {
  const res = await fetch(
    `${NASA_API_URL}/feed?start_date=${dateRange.startDate}&end_date=${dateRange.endDate}&api_key=${API_KEY}`
  );

  if (!res.ok) {
    console.log("Failed to fetch data");
  }

  return res.json();
}
