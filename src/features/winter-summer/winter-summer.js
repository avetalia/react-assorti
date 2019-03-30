import React, { useState, useEffect } from "react";

export const WinterSummer = () => {
  const [lat, setLat] = useState(null);
  const [errMessage, setErr] = useState("No errors");
  const [season, setSeason] = useState("Ekvator");
  const [month, setMonth] = useState("Januar");

  window.navigator.geolocation.getCurrentPosition(
    position => {
      setLat(position.coords.latitude);
    },
    err => setErr(err.message)
  );

  useEffect(() => {
    setMonth(new Date().getMonth());
    setSeason((lat, month) => {
      if (month > 2 && month < 9) {
        return lat > 0 ? setSeason("summer") : setSeason("winter");
      } else {
        console.log("Februar");
        return lat > 0 ? setSeason("winter") : setSeason("summer");
      }
    });
  }, []);

  if (!lat && errMessage) {
    return <div>Error happens: {errMessage}</div>;
  }
  return (
    <div>
      <h3>
        Latitude is {lat}, month is {month} and season is {season} <br />
        Any errors? – {errMessage}
      </h3>
    </div>
  );
};
