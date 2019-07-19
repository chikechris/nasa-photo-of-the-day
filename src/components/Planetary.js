import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import PlanetaryCards from "./PlanetaryCards";

const Div = styled.div`
    max-width: 900px;
    margin: auto;
    border: 2px rgb(9, 8, 41) solid;
  `;

function Planetary() {
  const [planetary, setPlanetary] = useState([]);

  useEffect(() => {
    const counter = 6;

    for (let i = 0; i < counter; i++) {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=iOC4aWWpH7ekr4DMMwv6e6E02WV1eVhhQdbyhUzS&date=2012-08-${15 +
            i}`
        )
        .then(response => {
          const planetaryData = response.data;
          setPlanetary(previousState => {
            return [...previousState, planetaryData];
          });

          console.log(planetaryData);
        })
        .catch(error => {
          console.log("ERROR", error);
        });
    }
  }, []);

 

  return (
    <Div>
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
    </Div>
  );
}

export default Planetary;
