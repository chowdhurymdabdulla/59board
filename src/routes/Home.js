import React, {useEffect, useState} from "react";
import styled from "styled-components";

import ExpandOverlay from "../components/ExpandOverlay";
import DistrictsMap from "../components/DistrictsMap";
import ThisWeeksEvents from '../components/event/ThisWeeksEvents'
import SelectedDistrictEvents from "../components/event/SelectedDistrictEvents";

import useWindowSize from "../utils/useWindowSize";

import getDistrictData from "../utils/getDistrictData";
import getEventsData from "../utils/getEventsData";

const Main = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  height: 100%;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  padding: 0 20px;
  color: #444444;
  height: calc(100vh - 20px - 20px);
  overflow-y: auto;
  flex: 1 1 500px;
`;

const SideContent = styled.div`
  flex: 1 1 229px;
  height: 100vh;
  background-color: #c6c6c6;
  position: relative;
  box-shadow: -3px 0px 3px 0px rgba(161, 161, 161, 0.2);

  @media only screen and (max-width: 768px) {
    height: ${(props) =>
      props.expanded ? "35vh" : "10vh"}; // expand when clicked
  }
`;

const Input = styled.input`
  width: calc(100% - 20px);
`

const Home = () => {
  const [sideContentExpanded, setSideContentExpanded] = useState(false);
  const [districts, setDistricts] = useState([])
  const [events, setEvents] = useState([])
  const [selectedDistrict, setSelectedDistrict] = useState(null)
  const size = useWindowSize();

  useEffect(() => {
      //load data
      getDistrictData().then(districts => setDistricts(districts))
      getEventsData().then(events => setEvents(events))

  },[])

  function _expandSideContent() {
    setSideContentExpanded(!sideContentExpanded);
  }

  return (
    <Main>
      <Content>
        <h1>59 Community Boards</h1>
        <p>
          New York City's government includes a system of 59 community board
          districts that offer a way for the public to get involved with local
          politics. Many New Yorkers don't know they exist, and the process to
          get involved can seem overwhelming.
        </p>
        <p>
          Most boards don't provide an easy way to get notified of upcoming
          meetings, making participation difficult. 59Boards scrapes event
          information from board websites and provides a feed for your calendar
          app's subscription feature.
        </p>

        <h2>This Week’s Board Meetings</h2>
        <ThisWeeksEvents events={events}/>

        <hr/>
        <Input type="text" placeholder="Search community district by address, neighborhood or name"/>
        <h2>Events in Selected District: {selectedDistrict}</h2>
        <SelectedDistrictEvents events={events} selectedDistrict={selectedDistrict}/>

      </Content>
      <SideContent expanded={sideContentExpanded}>
        {/*when width is mobile and sideContent hasn't been expanded overlay with expand "button"*/}
        {size.width <= 768 ? (
          <ExpandOverlay
            onClick={_expandSideContent}
            expanded={sideContentExpanded}
          />
        ) : null}
        <DistrictsMap
            districts={districts}
            size={size}
            expand={sideContentExpanded}
            selectedDistrict={selectedDistrict}
            setSelectedDistrict={setSelectedDistrict}
        />
      </SideContent>
    </Main>
  );
}

export default Home;
