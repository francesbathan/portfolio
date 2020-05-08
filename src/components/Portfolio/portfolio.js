import React from "react";
import { makeStyles } from "@material-ui/core";
import PuppyLove from "./puppylove.js";
import ProjectCovid from "./projectcovid.js";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    margin: "0 auto",
    padding: "5vh 5vw",
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <PuppyLove />
      <ProjectCovid />
    </div>
  );
};

export default Portfolio;
