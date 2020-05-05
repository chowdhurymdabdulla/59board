import React, { Component, Fragment, useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polygon,
} from "react-google-maps";

import AppMarker from "./AppMarker";

class AppMap extends Component {
  static defaultProps = {
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBWpIIadZEDaL-h6EpY427OIVhCSllpDe4",
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      clickedLatlng: { lat: 0, lng: 0 },
    };
  }

  openInfoBox(event, properties) {
    console.log(event, properties);
    this.setState({ clickedLatlng: event.latLng });
  }

  CMap = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 40.711991, lng: -73.972949 }}
      >
        {props.children}
      </GoogleMap>
    ))
  );

  render() {
    const features = this.props.districts.features.map((feature) => {
      const coordinates = feature.geometry.coordinates[0];
      const coordArr = coordinates
        ? coordinates.map((c) => ({ lat: c[1], lng: c[0] }))
        : [];

      const selected =
        this.props.selectedDistrict === feature.properties.BoroCD;

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
            this.props.onPolygonClick(feature.properties);
            this.openInfoBox(event, feature.properties);
          }}
        />
      );
    });
    return (
      <Fragment>
        <this.CMap
          googleMapURL={this.props.googleMapURL}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        >
          <AppMarker
            lat={40.711991}
            lng={-73.972949}
            name="My Marker"
            color="blue"
          />
          {features}
        </this.CMap>
      </Fragment>
    );
  }
}
export default AppMap;
