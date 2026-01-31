import DayCard from "./components/DayCard";
import TodayCard from "./components/TodayCard";
import { parkingTimeLeftAsString, getCurrentTimeAsString, test } from "./utils/date_logic";

function App() {

  const now = new Date();

  const weekdayNames = [
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag"
  ];

  const monthNames = [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December"
  ]



  return (
    <div className="App">
      <h1>Hello World!</h1>

      <DayCard
        day={{
          weekday: weekdayNames[now.getDay()],
          date: now.getDate()
        }}
      />
      <TodayCard
        day={{
          weekday: weekdayNames[now.getDay()],
          date: now.getDate(),
          month: monthNames[now.getMonth()],
          time: getCurrentTimeAsString(now),
          timeLeft: parkingTimeLeftAsString(now)
        }}
      />

    </div>
  );
}

export default App;