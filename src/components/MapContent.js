import React, {useState} from "react";
import styled from "styled-components";
import AppMap from "./AppMap";
import DistrictSearch from "./DistrictSearch";
import districts from "../data/districts";
import district_info from "../data/district_info";

const Container = styled.div`
  height: 100vh;
`;

const MapContent = () => {
    const [selectedDistrict, setSelectedDistrict] = useState(null)

    return (
        <>
            <AppMap
                selectedDistrict={selectedDistrict}
                setSelectedDistrict={setSelectedDistrict}
                districts={districts}
            />
            <DistrictSearch
                districts={districts}
                setSelectedDistrict={setSelectedDistrict}
            />
        </>
    );
};

export default MapContent;
