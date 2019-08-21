import React from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 380px;
  width: 100%;
  background: rgb(13, 7, 66);
  display: flex;
  justify-content: space-around;
`;
const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 20px;
`;
const Divv = styled.div`
  width: 50%;
`;

const Scroll = styled.p`
  overflow-y: scroll;
  height: 200px;
`;

function PlanetaryCards({ date, explanation, hdurl, title, copyright }) {
  return (
    <Div key={hdurl}>
      <Image src={hdurl} alt="" />
      <Divv>
        <h2>{title}</h2>
        <h4>{date}</h4>
        <Scroll>{explanation}</Scroll>
        <h4>{copyright}</h4>
      </Divv>
    </Div>
  );
}

export default PlanetaryCards;
