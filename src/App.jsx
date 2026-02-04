import InfoCard from "./components/InfoCard.jsx";
import TodayCard from "./components/TodayCard.jsx";
import { getCurrentTimeAsString} from "./utils/date_logic.jsx";
import { WEEKDAYS, MONTHS } from "./constants/dayAndMonths.jsx";
import { getForbiddenSide, getAllowedSide, parkingTimeLeftAsString } from "./utils/parking_logic.jsx";
import { useNow } from "./hooks/useNow.jsx";
import "./App.css";

function App() {

   const now = useNow();

  return (
    <div className="App">
          <h1>Parkering i Rättvik</h1>
      <div className="container">
      <InfoCard />
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
    </div>
  );
}

export default App;