import React, { useState, useEffect } from "react";
import axios from "axios";

import PlanetaryCards from "./PlanetaryCards";

function Planetary() {
  const [planetary, setPlanetary] = useState([]);

  useEffect(() => {
    axios

      .get(
        "https://api.nasa.gov/planetary/apod?api_key=v0uiXBdS2nDZXSwnqMZkNxa1d7014rZx6uL3khd6&date=2012-08-14"
      )
      .then(response => {
        const planetaryData = response.data;
        setPlanetary([planetaryData]);

        console.log(planetaryData);
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  }, []);

  return (
    <div className="planetary-container">
      {planetary.map(planetaryInfor => {
        return (
          <PlanetaryCards
            key={planetaryInfor.hdurl}
            title={planetaryInfor.title}
            copyright={planetaryInfor.copyright}
            date={planetaryInfor.date}
            explanation={planetaryInfor.explanation}
            hdurl={planetaryInfor.hdurl}
          />
        );
      })}
    </div>
  );
}

export default Planetary;
