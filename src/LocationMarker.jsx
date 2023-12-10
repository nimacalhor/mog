import { Popup, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;

      console.log(`Latitude: ${lat}, Longitude: ${lng}`);

      map.flyTo(e.latlng)
      setPosition(e.latlng, map.getZoom())
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default LocationMarker;
