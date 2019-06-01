import React, { useState, useEffect } from "react";

export const WinterSummer = () => {
  const [lat, setLat] = useState(null);
  const [errMessage, setErr] = useState("No errors");
  const [season, setSeason] = useState("Ekvator");
  let month = new Date().getMonth();

  window.navigator.geolocation.getCurrentPosition(
    position => {
      setLat(position.coords.latitude);
    },
    err => setErr(err.message)
  );

  useEffect(() => {
    if (month > 2 && month < 9) {
      return lat > 0 ? setSeason("hot") : setSeason("cold");
    } else {
      return lat > 0 ? setSeason("cold") : setSeason("hot");
    }
  }, [lat]);

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
