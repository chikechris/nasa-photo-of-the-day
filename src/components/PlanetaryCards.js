import React from "react";

function PlanetaryCards({ date, explanation, hdurl, title, copyright }) {
  return (
    <div className="planetary-card" key={hdurl}>
      <img className="planetary-img" src={hdurl} alt="" />
      <div className="planetary-info">
        <h2>{title}</h2>
        <h4>{date}</h4>
        <p>{explanation}</p>
        <h4>{copyright}</h4>
      </div>
    </div>
  );
}

export default PlanetaryCards;
