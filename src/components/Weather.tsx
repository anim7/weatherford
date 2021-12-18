import React from "react";
import "./css/Weather.css";

const { useEffect } = React;

interface Props {
  weather: any;
  mode: "light" | "dark";
  setSearchBarEnabled: (bool: boolean) => void;
}

const Weather: React.FC<Props> = ({ mode, weather, setSearchBarEnabled }) => {
  useEffect(() => {
    setSearchBarEnabled(true);
    //eslint-disable-next-line
  }, []);
  return (
    weather && (
      <div
        style={{ color: mode === "light" ? "black" : "white" }}
        className="weather"
      >
        <div
          className="heading"
          style={{ color: mode === "light" ? "black" : "white" }}
        >
          <h1>Weather News</h1>
          <h1>
            {weather.data.location.name}, {weather.data.location.country}
          </h1>
        </div>
        <div
          className="weather-container"
          style={{
            backgroundColor: mode === "light" ? "white" : "rgb(44, 42, 42)",
            borderColor: mode === "light" ? "black" : "white",
          }}
        >
          <div className="mainInfo">
            <h3>Current Weather</h3>
            <h3>Region: {weather.data.location.region}</h3>
            <h3>City: {weather.data.location.name}</h3>
            <h3>Country: {weather.data.location.country}</h3>
            <h4>{weather.data.current.observation_time}</h4>
            <div className="temp">
              <p>
                <img
                  src={weather.data.current.weather_icons[0]}
                  alt="Weather"
                />
              </p>
              <h3>{weather.data.current.temperature}&deg;C</h3>
            </div>
            <div className="description">
              {weather.data.current.weather_descriptions.map(
                (element: string) => {
                  return <h4 key={element}>{element}</h4>;
                }
              )}
            </div>
            <h4>local time: {weather.data.location.localtime}</h4>
          </div>
        </div>
      </div>
    )
  );
};

export default Weather;
