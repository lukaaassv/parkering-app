import { getWeekNumber, isWithinParkingTime } from "./date_logic.jsx";

//Kollar om nuvarande vecka har datumparkering
export function isDateParkingActive(date) {
  const week = getWeekNumber(date);
  const inSeason = (week >= 42 && week <= 52) || (week >= 1 && week <= 18);
  return inSeason && isWithinParkingTime(date);
}

//Returnerar sidan man inte får parkera på mellan klockan 00-17 
export function getForbiddenSide(date) {
  return date.getDate() % 2 === 0 ? "jämna" : "udda";
}

export function getAllowedSide(date) {
  return date.getDate() % 2 === 0 ? "udda" : "jämna";
}

export function parkingTimeLeft(date) {
    

}