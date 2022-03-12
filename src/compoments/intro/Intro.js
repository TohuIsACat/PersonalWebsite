import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Front-End Developer",
        "Back-End Developer",
        "Full-Stack Developer",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profilePicture.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Solon Lin</h1>
          <h3>
            Freelance<span ref={textRef}></span>
          </h3>
        </div>
        <a href="#work" className="arrow">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
