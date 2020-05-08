import React from "react";
import { makeStyles } from "@material-ui/core";
import PuppyLove from "./puppylove.js";
import ProjectCovid from "./projectcovid.js";
import Button from "./button";
import Button2 from "./button2";
import Typist from "react-typist";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    margin: "0 auto",
    padding: "5vh 5vw",
  },
  panel: {
    display: "flex",
    flexDirection: "column",
  },
  hello: {
    color: "gray",
    fontWeight: "700",
    fontSize: "20pt",
    letterSpacing: "0.3em",
    textAlign: "left",
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <>
      <Typist>
        <span className={classes.hello}>WHAT I'VE WORKED ON</span>
      </Typist>
      <div className={classes.container}>
        <div className={classes.panel}>
          <PuppyLove />
          <Button />
        </div>
        <div className={classes.panel}>
          <ProjectCovid />
          <Button2 />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
