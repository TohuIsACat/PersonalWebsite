import React from "react";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={menuOpen ? "active menu" : "menu"}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
          <div className="line"> </div>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#work">Intro</a>
          <div className="line"> </div>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Project</a>
          <div className="line"> </div>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
          <div className="line"> </div>
        </li>
      </ul>
    </div>
  );
}
