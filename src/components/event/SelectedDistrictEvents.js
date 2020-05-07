import React from "react";
import styled from 'styled-components'

import EventCard from "./EventCard";

const Events = styled.div`
    max-height: 30rem;
    overflow-y: auto;
`

const SelectedDistrictEvents = ({events, selectedDistrict}) => {

    const selectedEvents = events.filter(event => event.district === selectedDistrict)

    if (!selectedDistrict) {
        return <p>Select a district by clicking on on the map or searching by your address or neighborhood in the
            textbox.</p>
    }

    return (
        <Events>
            {selectedEvents.length > 0 ? (
                selectedEvents.map((event, i) => <EventCard event={event} showDistrict={true}
                                                            key={`selected-event-${i}`}/>)
            ) : <p>No events in database, check Community Board's website</p>}
        </Events>
    )
}

export default SelectedDistrictEvents