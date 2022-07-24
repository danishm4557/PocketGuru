import React, { useRef, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, InfoWindow, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '1440px',
  height: '760px'
};
const center = {
  lat: 41.8781,
  lng: -87.6298
};

const Map = () => {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      {/* THIS MARKER WORKS >>>
      <Marker
        key={23}
        position={ center }
        icon={{
          url: "https://thumbs.dreamstime.com/b/red-maps-pin-location-map-icon-location-pin-pin-icon-vector-red-maps-pin-location-map-icon-location-pin-pin-icon-vector-vector-140200096.jpg",
          scaledSize: new window.google.maps.Size(50, 50),
        }}
      /> */}

        <></>
      </GoogleMap>
  ) : <></>
};

export default Map;
