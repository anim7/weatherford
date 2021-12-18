import React from "react";
import "./css/About.css";

const { useState, useEffect } = React;

interface Props {
  mode: "light" | "dark";
  setSearchBarEnabled: (bool: boolean) => void;
}

const About: React.FC<Props> = ({ mode, setSearchBarEnabled }) => {
  interface readMore {
    readMoreEnabled1: boolean;
    readMoreEnabled2: boolean;
    readMoreEnabled3: boolean;
  }
  const [readMoreEnabled, setReadMoreEnabled] = useState<readMore>({
    readMoreEnabled1: false,
    readMoreEnabled2: false,
    readMoreEnabled3: false,
  });
  useEffect(() => {
    setSearchBarEnabled(false);
    //eslint-disable-next-line
  }, []);
  return (
    <div
      className="about-container"
      style={{ backgroundColor: mode === "light" ? "white" : "rgb(84 80 80)" }}
    >
      <div className="information-container">
        <button
          className="about-button"
          style={{
            backgroundColor: mode === "light" ? "white" : "black",

            color: mode === "light" ? "black" : "white",
          }}
          onClick={() => {
            if (!readMoreEnabled.readMoreEnabled1) {
              setReadMoreEnabled({
                readMoreEnabled1: true,
                readMoreEnabled2: readMoreEnabled.readMoreEnabled2,
                readMoreEnabled3: readMoreEnabled.readMoreEnabled3,
              });
            } else {
              setReadMoreEnabled({
                readMoreEnabled1: false,
                readMoreEnabled2: readMoreEnabled.readMoreEnabled2,
                readMoreEnabled3: readMoreEnabled.readMoreEnabled3,
              });
            }
          }}
        >
          Lorem ipsum dolor sit amet.
        </button>
        {readMoreEnabled.readMoreEnabled1 && (
          <div
            className="about"
            style={{
              color: mode === "light" ? "black" : "white",
              backgroundColor: mode === "dark" ? "black" : "white",
              borderColor: mode === "light" ? "black" : "whitesmoke",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              excepturi totam omnis quo maxime, quaerat quidem aliquid commodi
              at reiciendis vero facere nobis voluptates repudiandae et eos
              harum praesentium. Tempora saepe mollitia non veniam hic.
            </p>
          </div>
        )}
      </div>
      <div className="information-container">
        <button
          className="about-button"
          style={{
            backgroundColor: mode === "light" ? "white" : "black",
            color: mode === "light" ? "black" : "white",
          }}
          onClick={() => {
            if (!readMoreEnabled.readMoreEnabled2) {
              setReadMoreEnabled({
                readMoreEnabled1: readMoreEnabled.readMoreEnabled1,
                readMoreEnabled2: true,
                readMoreEnabled3: readMoreEnabled.readMoreEnabled3,
              });
            } else {
              setReadMoreEnabled({
                readMoreEnabled1: readMoreEnabled.readMoreEnabled1,
                readMoreEnabled2: false,
                readMoreEnabled3: readMoreEnabled.readMoreEnabled3,
              });
            }
          }}
        >
          Lorem ipsum dolor sit amet.
        </button>
        {readMoreEnabled.readMoreEnabled2 && (
          <div
            className="about"
            style={{
              color: mode === "light" ? "black" : "white",
              backgroundColor: mode === "dark" ? "black" : "white",
              borderColor: mode === "light" ? "black" : "whitesmoke",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              molestiae eius repudiandae ducimus vero deleniti cupiditate
              delectus hic dolorem, officia cum assumenda officiis iste itaque
              doloremque amet, veritatis corrupti, sunt eveniet ipsam quo?
              Error, laudantium?
            </p>
          </div>
        )}
      </div>
      <div className="information-container">
        <button
          className="about-button"
          style={{
            backgroundColor: mode === "light" ? "white" : "black",
            color: mode === "light" ? "black" : "white",
          }}
          onClick={() => {
            if (!readMoreEnabled.readMoreEnabled3) {
              setReadMoreEnabled({
                readMoreEnabled1: readMoreEnabled.readMoreEnabled1,
                readMoreEnabled2: readMoreEnabled.readMoreEnabled2,
                readMoreEnabled3: true,
              });
            } else {
              setReadMoreEnabled({
                readMoreEnabled1: readMoreEnabled.readMoreEnabled1,
                readMoreEnabled2: readMoreEnabled.readMoreEnabled2,
                readMoreEnabled3: false,
              });
            }
          }}
        >
          Lorem ipsum dolor sit amet.
        </button>
        {readMoreEnabled.readMoreEnabled3 && (
          <div
            className="about"
            style={{
              color: mode === "light" ? "black" : "white",
              backgroundColor: mode === "dark" ? "black" : "white",
              borderColor: mode === "light" ? "black" : "whitesmoke",
            }}
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
              quas dolores quaerat incidunt perspiciatis assumenda alias dicta
              sed explicabo reprehenderit, unde fuga corporis in praesentium ad
              autem illum? Libero, doloribus excepturi. Itaque quas quo omnis.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
