import { getWeekNumber, isWithinParkingTime } from "./date_logic.jsx";

//Checks if current week has date parking active
export function isDateParkingActive(date) {
  const week = getWeekNumber(date);
  const inSeason = (week >= 42 && week <= 52) || (week >= 1 && week <= 18);
  return inSeason && isWithinParkingTime(date);
}

export function getForbiddenSide(date) {
  return date.getDate() % 2 === 0 ? "jämna" : "udda";
}

export function getAllowedSide(date) {
  return date.getDate() % 2 === 0 ? "udda" : "jämna";
}
//Returns the time left before the side switches
export function parkingTimeLeftAsString (date) {
  const hoursLeft = 23 - date.getHours();
  const minutesLeft = 59 - date.getMinutes();
  return `${hoursLeft}h ${minutesLeft}min`;
}
