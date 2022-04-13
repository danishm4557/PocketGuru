import React, { useRef, useEffect, useState } from "react";
import "./Map.css";
import mapboxgl, { NavigationControl } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.js";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import addControl from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.js";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

const MapC = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const directions = useRef(null);
  const [lng, setLng] = useState(-87.6298);
  const [lat, setLat] = useState(41.8781);
  const [zoom, setZoom] = useState(9);
  const marker = useRef(null);

  // const MapboxDirections = require("@mapbox/mapbox-gl-directions");

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    directions.current = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
      alternatives: false,
      geometries: "geojson",
      controls: { instructions: false },
      flyTo: false,
    });
  });

  // map.addControl(
  //   new MapboxDirections({
  //     accessToken: mapboxgl.accessToken,
  //   }),
  //   "top-left"
  // );

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <>
      <div ref={mapContainer} className="map-container" />
    </>
  );
};

export default MapC;
