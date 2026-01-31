import DayCard from "./components/DayCard";
import TodayCard from "./components/TodayCard";
import { parkingTimeLeftAsString, getCurrentTimeAsString, test } from "./utils/date_logic";
import { WEEKDAYS, MONTHS } from "./constants/dayAndMonths.jsx";
import { getForbiddenSide, getAllowedSide} from "./utils/parking_logic.jsx";

function App() {

  const now = new Date();

  return (
    <div className="App">
      <h1>Hello World!</h1>
    <h1>{getForbiddenSide(now)}</h1>
      <DayCard
        day={{
          weekday: WEEKDAYS[now.getDay()],
          date: now.getDate()
        }}
      />
      <TodayCard
        day={{
          weekday: WEEKDAYS[now.getDay()],
          date: now.getDate(),
          month: MONTHS[now.getMonth()],
        }}
        time={{
          currentTime: getCurrentTimeAsString(now),
          timeLeft: parkingTimeLeftAsString(now)
        }}
        side={{
          allowed: getAllowedSide(now),
          forbidden: getForbiddenSide(now)
        }}
      />

    </div>
  );
}

export default App;