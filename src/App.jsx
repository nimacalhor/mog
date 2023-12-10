import "./App.css";
import Map from "./Map";
import SideBar from "./SideBar";
import { useState } from "react";
import { currentCoordinatesContext } from "./currentCoordinatesContext";
import { coordinatesContext } from "./coordinatesContext";

function App() {
  const [coordinates, setCoordinates] = useState([]);
  const [currentCoordinates, setCurrentCoordinates] = useState([]);

  return (
    <>
      <currentCoordinatesContext.Provider
        value={{ currentCoordinates, setCurrentCoordinates }}
      >
        <coordinatesContext.Provider value={{ coordinates, addCoordinates: addHandler }}>
          <div className="w-screen grid grid-cols-12 h-screen bg-red-600">
            <section className="col-span-8 lg:col-span-9">
              <Map />
            </section>
            <SideBar />
          </div>
        </coordinatesContext.Provider>
      </currentCoordinatesContext.Provider>
    </>
  );

  function addHandler(lat, lon) {
    setCoordinates((prevCoordinates) => [...prevCoordinates, [lat, lon]]);
    setCurrentCoordinates([lat, lon]);
  }
}

export default App;
