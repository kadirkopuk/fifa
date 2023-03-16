import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Home.module.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div
        className={classes.link_navigator}
        onClick={() => navigate("/leagues")}
      >
        Leagues
      </div>
    </div>
  );
}

export default Home;
