import React from "react";

import Planetary from "./components/Planetary";
import styled from "styled-components";

const DivApp = styled.div`
  text-align: center;
  background-color: rgb(78, 63, 207);
`;
function App() {
  return (
    <DivApp>
      <h1>NASA Photos Of The Day</h1>
      <Planetary />
    </DivApp>
  );
}

export default App;
