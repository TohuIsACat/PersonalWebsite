import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  registerPortfolio,
  postPortfolio,
  notificationPortfolio,
  othersPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "register":
        setData(registerPortfolio);
        break;
      case "post":
        setData(postPortfolio);
        break;
      case "notification":
        setData(notificationPortfolio);
        break;
      case "others":
        setData(othersPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);

  const list = [
    { id: "featured", title: "Featured" },
    { id: "register", title: "Register and Login" },
    { id: "post", title: "Post and Comment" },
    { id: "notification", title: "Notification and Chat" },
    { id: "others", title: "Others" },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <h2>FakeBook</h2>
      <ul>
        {list.map((i) => (
          <PortfolioList
            key={i.id}
            id={i.id}
            title={i.title}
            active={selected === i.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className={d.video ? "video item" : "item"} key={d.id}>
            {d.image ? (
              <img src={d.image} alt="" />
            ) : (
              <video src={d.video} controls />
            )}
            <h3>{d.title}</h3>
          </div>
        ))}

        <div className="git item">
          <a href="https://github.com/TohuIsACat/FakeBook">
            <img className="git" src="/assets/github.png" alt="" />
          </a>
          <h3 className="git">See more on GitHub</h3>
        </div>
      </div>
      <a href="#contact" className="arrow">
        <img src="assets/down.png" alt="" />
      </a>
    </div>
  );
}
