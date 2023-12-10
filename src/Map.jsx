import React from "react";
import LocationMarker from "./LocationMarker";

import "leaflet";
import {  TileLayer, MapContainer } from "react-leaflet";

function Map() {
  return (
    <MapContainer className="w-full h-screen" zoom={9} center={[32, 57]}>
      <TileLayer
        className=""
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}

export default Map;
