import React from "react";
import { useRef } from "react";
import { useCoordinatesContext } from "./coordinatesContext";

function SideBar() {
  const latInputRef = useRef();
  const lonInputRef = useRef();
  const { coordinates, addCoordinates } = useCoordinatesContext();

  return (
    <section className="col-span-4 lg:col-span-3 bg-slate-800 h-full p-7 pt-12">
      <h1 className="text-2xl lg:text-4xl text-center text-slate-100">
        Enter Lat Lon
      </h1>
      <div className="my-10 flex justify-evenly items-center gap-5">
        <div>
          <label className="text-slate-200 text-lg" htmlFor="latInput">
            lat
          </label>
          <input
            ref={latInputRef}
            className="rounded-md h-10 p-2"
            id="latInput"
            type="number"
          />
        </div>
        <div>
          <label className="text-slate-200 text-lg" htmlFor="lonInput">
            lon
          </label>
          <input
            ref={lonInputRef}
            className="rounded-md h-10 p-2"
            id="lonInput"
            type="number"
          />
        </div>
      </div>
      <button
        onClick={submitHandler}
        className="bg-teal-500 text-slate-50 text-2xl p-2 rounded-md shadow-md block w-full"
      >
        submit
      </button>
      <ul className="h-[max(60vh,24rem)] overflow-y-scroll mt-4">
        {coordinates.length >= 1 &&
          coordinates.map(([lat, lon], i) => (
            <li
              className="p-2 rounded-md bg-slate-700 text-slate-50 text-center my-2"
              key={i}
            >
              lat: {lat}, lon: {lon}
            </li>
          ))}
      </ul>
    </section>
  );

  function submitHandler() {
    const lat = latInputRef.current.value;
    const lon = lonInputRef.current.value;
    if (isNaN(lat) || isNaN(lon)) return;
    addCoordinates(lat, lon);
  }
}

export default SideBar;
