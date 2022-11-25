import React from "react";
import GoogleMapReact from 'google-map-react';

const myGMapComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: -6.2940886,
      lng: 107.0894794
    },
    zoom: 18
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <myGMapComponent
          lat={-6.2940886}
          lng={107.0894794}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}