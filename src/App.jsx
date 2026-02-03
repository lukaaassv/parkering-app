import DayCard from "./components/DayCard.jsx";
import TodayCard from "./components/TodayCard.jsx";
import { getCurrentTimeAsString} from "./utils/date_logic.jsx";
import { WEEKDAYS, MONTHS } from "./constants/dayAndMonths.jsx";
import { getForbiddenSide, getAllowedSide, parkingTimeLeftAsString } from "./utils/parking_logic.jsx";
import { useNow } from "./hooks/useNow.jsx";
function App() {

   const now = useNow(); // 👈 custom hook

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