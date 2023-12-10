import { Popup, Marker, useMapEvents } from "react-leaflet";
import { useCurrentCoordinates } from "./currentCoordinatesContext";
import { useCoordinatesContext } from "./coordinatesContext";
import { useEffect } from "react";

function LocationMarker() {
  const { currentCoordinates, setCurrentCoordinates } = useCurrentCoordinates();
  const { addCoordinates } = useCoordinatesContext();

  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;

      console.log(`Latitude: ${lat}, Longitude: ${lng}`);

      map.flyTo(e.latlng);
      setCurrentCoordinates([lat, lng]);
      addCoordinates(lat, lng)
    },
  });

  useEffect(() => {
    if (currentCoordinates.length < 1) return;
    map.flyTo(currentCoordinates);
  }, [currentCoordinates, map]);

  return currentCoordinates.length < 1 ? null : (
    <Marker position={currentCoordinates}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default LocationMarker;
