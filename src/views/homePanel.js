import React from "react";
import { makeStyles } from "@material-ui/core";
import { Router } from "@reach/router";

import Header from "../components/Home/header";
import Social from "../components/Home/social";
import Greeting from "../components/Home/greeting";
import About from "../components/Home/about";
import Contact from "../components/contact";
import Footer from "../components/Home/footer";
import Portfolio from "../components/Portfolio/portfolio";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "black",
    boxShadow: "0px 10px 10px black",
    width: "80vw",
    margin: "0 auto",
    padding: "2vh 2vw",
  },
  main: {
    display: "flex",
    flexGrow: "3",
  },
}));

const HomePanel = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Header />
        <div className={classes.main}>
          <div>
            <Social />
          </div>
          <div>
            <Router>
              <Greeting path="/" />
              <About path="/about" />
              <Contact path="/contact" />
              <Portfolio path="/portfolio" />
            </Router>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default HomePanel;
