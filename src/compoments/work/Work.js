import React, { useState } from "react";
import "./work.scss";
import {
  LaptopChromebook,
  Code,
  Person,
  ContactPhone,
  Call,
  Email,
} from "@mui/icons-material";
export default function Work() {
  const [slide, setSlide] = useState(0);

  const handleClick = (way) => {
    way === "l"
      ? setSlide(slide > 0 ? slide - 1 : 3)
      : setSlide(slide < 3 ? slide + 1 : 0);
  };

  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translatex(-${slide * 100}vw)` }}
      >
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <LaptopChromebook className="img" />
                </div>
                <h2>FakeBook</h2>
                <p>
                  此作品為模仿FaceBook之介面所完成之社群網站,採前後端分離,
                  功能包含:
                  會員系統,貼文,即時聊天,即時通知。架構及詳細說明請點下方連結至GitHub觀看。
                </p>
                <a href="https://github.com/TohuIsACat/FakeBook">GitHub</a>
              </div>
            </div>
            <div className="right">
              <img src="/assets/project/image/project.png" alt="" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <Person className="img" />
                </div>
                <h2>About Me</h2>
                <p>
                  大學曾就讀資訊管理學系,
                  <br />
                  但發生了場意外沒有繼續學業。
                </p>

                <p>
                  2021年的10月開始,利用下班的時間自學程式相關的知識與技能,
                  目前主要方向為MERN的全端開發,具備讀懂說明文件、遇到困難找資料自行解決的能力。
                </p>
                <p>細心、學習力強、邏輯好、執行力佳常常是他人對我的評價。</p>
                <p>有時因太過謹慎細心而被嫌龜毛。</p>
              </div>
            </div>
            <div className="right">
              <img
                className="profile"
                src="/assets/profilePicture2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <Code className="img" />
                </div>
                <h2>Skills</h2>
                <div className="skill">
                  <img src="assets/html.png" alt="" />
                  <img src="assets/css.png" alt="" />
                  <img src="assets/js.png" alt="" />
                  <img src="assets/react.png" alt="" />
                  <img src="assets/mongodb.png" alt="" />
                  <img src="assets/node.png" alt="" />
                  <div className="icon">
                    <img src="assets/github2.png" alt="" />
                    <img src="assets/postman.png" alt="" />
                    <img src="assets/source.png" alt="" />
                    <img src="assets/notion.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <img className="skill" src="/assets/mern.png" alt="" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <ContactPhone className="img" />
                </div>
                <h2>Contact</h2>
                <h2 className="mobileContact">0923-212-268</h2>
                <div className="contact">
                  <div className="list">
                    <Person className="contactIcon" />
                    <span>林建璋 / Solon Lin</span>
                  </div>
                  <div className="list">
                    <Call className="contactIcon" />
                    <span>0923-212-268</span>
                  </div>
                  <div className="list">
                    <Email className="contactIcon" />
                    <span>sss2345678@gmail.com</span>
                  </div>
                  <div className="list">
                    <img src="assets/line.png" alt="" />
                    <span>sss345678</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <img className="contact" src="/assets/contact.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("l")}
      />
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick()}
      />
      <a href="#portfolio" className="arrowBot">
        <img src="assets/down.png" alt="" />
      </a>
    </div>
  );
}
