import React, {useState, useEffect} from "react";
import styled from "styled-components";
import DistrictSearch from "./DistrictSearch";

const Container = styled.div`
  height: 100%;
`;

const MapContent = ({districts}) => {
    const [selectedDistrict, setSelectedDistrict] = useState(null)

    useEffect(() => console.log(districts), [districts])

    return (
        <>
            {/*<AppMap*/}
            {/*    selectedDistrict={selectedDistrict}*/}
            {/*    setSelectedDistrict={setSelectedDistrict}*/}
            {/*    districts={districts}*/}
            {/*/>*/}
            <DistrictSearch
                districts={districts}
                setSelectedDistrict={setSelectedDistrict}
            />
        </>
    );
};

export default MapContent;
