import React from "react";
import EventCard from "./EventCard";

function getMonday(d) {
    //https://stackoverflow.com/questions/4156434/javascript-get-the-first-day-of-the-week-from-current-date
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6:1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}

function getNextWeek(d){
    return new Date(d.getTime() + (7 * 86400000))
}
const thisWeeksEvents = ({events}) => {
    //filter for events between monday and next monday
    const monday = getMonday(new Date())
    const nextMonday = getNextWeek(monday)

    const filteredEvents = events.filter(event => event._date >= event._date && event._date <= nextMonday)
    return filteredEvents.map((event,i) => <EventCard event={event} showDistrict={true} key={`weeks-event-${i}`}/>)
}

export default thisWeeksEvents
