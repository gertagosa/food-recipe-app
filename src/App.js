import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "4136e6df";
  const APP_KEY = "0697c6c9b15b7f49e289f9e5c93f42fb";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };

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
