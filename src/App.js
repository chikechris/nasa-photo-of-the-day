import React from "react";
import "./App.css";

import Planetary from "./components/Planetary";
import styled from "styled-components";

const DivApp = styled.div`
  text-align: center;
  background-color: rgb(78, 63, 207);
`;

function App() {
  return (
    <div>
      <header className="App-header  ">
        <h2>NASA Photos Of The Day</h2>
      </header>
      <DivApp>
        <Planetary />
      </DivApp>
    </div>
  );
}

export default App;
