import React from "react";
import "./App.css";

const App = () => {
  const APP_ID = "4136e6df";
  const APP_KEY = "0697c6c9b15b7f49e289f9e5c93f42fb";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text">
          <button className="search-button" type="submit">
            Search
          </button>
        </input>
      </form>
    </div>
  );
};
export default App;
