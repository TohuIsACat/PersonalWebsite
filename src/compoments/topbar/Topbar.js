import React from "react";
import "./topbar.scss";
import { Call, Mail } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={menuOpen ? "active topbar" : "topbar"}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Solon
          </a>
          <div className="itemContainer">
            <Call className="icon" />
            <span>0923-212-268</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>sss2345678@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
