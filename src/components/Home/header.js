import React from "react";
import { makeStyles } from "@material-ui/core";
import { navigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    fontFamily: "Montserrat",
    color: "white",
  },
  navbar: {
    display: "flex",
    marginLeft: "12vw",
  },
  name: {
    fontSize: "9pt",
    fontWeight: "600",
    letterSpacing: "0.3em",
    cursor: "pointer",
    "&:hover": {
      color: "lightgray",
    },
  },
  position: {
    fontSize: "9pt",
    fontWeight: "100",
    letterSpacing: "1em",
  },
  navmenu: {
    marginLeft: "2vw",
    fontSize: "9pt",
    fontWeight: "600",
    verticalAlign: "middle",
    cursor: "pointer",
    "&:hover": {
      color: "lightgray",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.name} onClick={() => navigate("/")}>
        FRANCES BATHAN
        <span className={classes.position}> // FULL STACK WEB DEVELOPER</span>
      </p>

      <div className={classes.navbar}>
        <p className={classes.navmenu} onClick={() => navigate("/")}>
          HOME
        </p>
        <p className={classes.navmenu} onClick={() => navigate("/about")}>
          ABOUT
        </p>
        <p className={classes.navmenu} onClick={() => navigate("/portfolio")}>
          PORTFOLIO
        </p>
        <p className={classes.navmenu} onClick={() => navigate("/contact")}>
          CONTACT
        </p>
      </div>
    </div>
  );
};

export default Header;
