function DayCard({day}){
    return (<div className = "day-card">
        <div className="day_of_week">
            <h3>{day.weekday}</h3>
        </div>
        <div className="date">
            <h3>{day.date}</h3>
        </div>
    </div>
    )


}

export default DayCard