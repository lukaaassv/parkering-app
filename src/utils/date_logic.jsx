
export function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

export function isWithinParkingTime(date) {
  const hour = date.getHours();
  return hour >= 0 && hour < 17;
}

export function getCurrentTimeAsString(date) {
  const currentHour = String(date.getHours()).padStart(2, "0");
  const currentMinutes = String(date.getMinutes()).padStart(2, "0");
  const currentSeconds = String(date.getSeconds()).padStart(2, "0");

  return `${currentHour}:${currentMinutes}:${currentSeconds}`;
}