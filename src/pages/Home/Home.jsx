import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Home.module.css";
import navs from "../../data/navs.json";
function Home() {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      {navs.map((nav) => (
        <div
          key={nav.id}
          className={classes.link_navigator}
          onClick={() => navigate(`/${nav.name}`)}
        >
          {nav.name}
        </div>
      ))}
    </div>
  );
}

export default Home;
