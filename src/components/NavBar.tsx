import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./css/NavBar.css";

interface Props {
  mode: "light" | "dark";
  toggleMode: () => void;
  fetchWeather: (city: string | null) => Promise<void>;
  searchBarEnabled: boolean;
}

const NavBar: React.FC<Props> = ({
  mode,
  toggleMode,
  fetchWeather,
  searchBarEnabled,
}) => {
  return (
    <div
      className="container"
      style={{ color: mode === "light" ? "black" : "white" }}
    >
      <nav
        className="navbar"
        style={{
          backgroundColor: mode === "dark" ? "#2c2a2a" : "#ebe9e9",
        }}
      >
        <div className="left-bar">
          <ul>
            <li id="logo">
              <Link
                to="/"
                style={{ color: mode === "light" ? "black" : "white" }}
              >
                WeatherFord
              </Link>
            </li>
            <li>
              <Link
                to="/"
                style={{ color: mode === "light" ? "black" : "white" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{ color: mode === "light" ? "black" : "white" }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-bar">
          {searchBarEnabled && (
            <div className="search">
              <input
                style={{
                  backgroundColor: mode === "light" ? "white" : "black",
                  color: mode === "dark" ? "white" : "black",
                  borderColor: mode === "light" ? "black" : "white",
                }}
                type="text"
                name="city"
                id="search-bar"
                placeholder="Search Location"
              />
              <button
                className="search-button"
                style={{
                  backgroundColor: mode === "light" ? "white" : "black",
                  color: mode === "light" ? "black" : "white",
                  borderColor: mode === "light" ? "black" : "white",
                }}
                onClick={() => {
                  const searchBar = document.getElementById(
                    "search-bar"
                  ) as HTMLInputElement;
                  fetchWeather(searchBar.value);
                  searchBar.value = "";
                }}
              >
                &#x1F50E;&#xFE0E;
              </button>
            </div>
          )}
          <label className="switch">
            <input type="checkbox" onClick={toggleMode} />
            <span className="slider round"></span>
          </label>
          <p>Dark Mode</p>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
