import EventCard from "./EventCard";
import React from "react";

const SelectedDistrictEvents = ({events, selectedDistrict}) => {

    const selectedEvents = events.filter(event => event.district === selectedDistrict)

    if (!selectedDistrict) {
        return <p>Select a district by clicking on on the map or searching by your address or neighborhood in the
            textbox.</p>
    }

    return (
        <>
            {selectedEvents.length > 0 ? (
                selectedEvents.map((event, i) => <EventCard event={event} showDistrict={true}
                                                            key={`selected-event-${i}`}/>)
            ) : <p>No events in database, check Community Board's website</p>}
        </>
    )
}

export default SelectedDistrictEvents