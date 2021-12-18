import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Weather from "./components/Weather";
import About from "./components/About";
import axios from "axios";
const { useState } = React;

const App: React.FC = () => {
  const apiKey = process.env.REACT_APP_WEATHER_API;
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [weather, setWeather] = useState<any>(null);
  const [searchBarEnabled, setSearchBarEnabled] = useState<boolean>(true);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3d3d3d";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#d9d5d5";
    }
  };

  const fetchWeather = async (city: string | null) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`,
        config
      )
      .then((res) => {
        if (res.data.location) {
          setWeather(res);
        } else {
          setWeather(null);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <NavBar
        toggleMode={toggleMode}
        mode={mode}
        fetchWeather={fetchWeather}
        searchBarEnabled={searchBarEnabled}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Weather
              weather={weather}
              mode={mode}
              setSearchBarEnabled={setSearchBarEnabled}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About mode={mode} setSearchBarEnabled={setSearchBarEnabled} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
