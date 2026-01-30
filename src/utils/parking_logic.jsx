import { getWeekNumber, isWithinParkingTime } from "./date_logic";

export function isDateParkingActive(date) {
  const week = getWeekNumber(date);
  const inSeason = (week >= 42 && week <= 52) || (week >= 1 && week <= 18);
  return inSeason && isWithinParkingTime(date);
}