import React, { useState } from "react";
import styled from "styled-components";
import AppMap from "./AppMap";
import DistrictSearch from "./DistrictSearch";
import districts from "../data/districts";
import district_info from "../data/district_info";

const Container = styled.div`
  height: 100vh;
`;

const MapContent = () => {
  function onPolygonClick(properties) {
    setSelectedDistrict(properties.BoroCD);
    console.log(selectedDistrict);
  }

  return (
    <>
    <AppMap
      onPolygonClick={onPolygonClick}
      selectedDistrict={selectedDistrict}
      districts={districts}
    />
    <DistrictSearch/>
    </>
  );
};

export default MapContent;
