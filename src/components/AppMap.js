import React, {useState, memo} from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Polygon,
} from "react-google-maps";

//todo - change library and fix component lifecycle
//https://github.com/tomchentw/react-google-maps/issues/220

const AppMap = ({districts, selectedDistrict, setSelectedDistrict}) => {
    const googleMapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBWpIIadZEDaL-h6EpY427OIVhCSllpDe4"

    const CMap = withScriptjs(
        withGoogleMap((props) => (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{lat: 40.711991, lng: -73.972949}}
            >
                {props.children}
            </GoogleMap>
        ))
    );

    const features = districts.features.map((feature) => {
        const coordinates = feature.geometry.coordinates[0];
        const coordArr = coordinates
            ? coordinates.map((c) => ({lat: c[1], lng: c[0]}))
            : [];

        const selected = selectedDistrict === feature.properties.BoroCD;

        return (
            <Polygon
                className="appMap"
                path={coordArr}
                options={{
                    strokeColor: "#3f3f3f",
                    strokeWeight: selected ? 3 : 1,
                    strokeOpacity: 0.8,
                    fillColor: selected ? "#fdae6b" : "#f0f0f0",
                    fillOpacity: 0.3,
                }}
                onClick={(event) => {
                    setSelectedDistrict(feature.properties.BoroCD)
                }}
            />
        );
    });

    return (
        <>
            <CMap
                googleMapURL={googleMapURL}
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `100%`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
            >
                {features}
            </CMap>
        </>
    );

}


export default AppMap;
