import React from "react";

function PlanetaryCards({ date, explanation, hdurl, title, copyright, id }) {
  return (
    <div className="planetary-card" key={hdurl}>
      <img
        className="planetary-img"
        src={hdurl}
        alt=""
        width="300"
        //margin="auto"
      />
      <div className="planetary-info">
        <h2>{title}</h2>
        <h4>{date}</h4>
        <p>{explanation}</p>
        <p>{copyright}</p>
      </div>
    </div>
  );
}

export default PlanetaryCards;
