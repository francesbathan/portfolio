import React from "react";
import { makeStyles } from "@material-ui/core";

import background from "../assets/marble-bg.jpg";

import HomePanel from "./homePanel";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "black",
    padding: "15vh 10vw",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <HomePanel />
    </div>
  );
};
export default Home;
