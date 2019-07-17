import React from "react";
import "./App.css";
import Planetary from "./components/Planetary";

/*
// import api key:
Get Your API Key
My API key for cchike2017@gmail.com is:
iOC4aWWpH7ekr4DMMwv6e6E02WV1eVhhQdbyhUzS
// With actual student key:
https://api.nasa.gov/planetary/apod?api_key=iOC4aWWpH7ekr4DMMwv6e6E02WV1eVhhQdbyhUzS
// With demo key:
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14
// api example.
*/

function App() {
  return (
    <div className="App">
      <Planetary />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span>🚀 </span>!
      </p>
    </div>
  );
}

export default App;
