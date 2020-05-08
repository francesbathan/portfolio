import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    fontSize: "8pt",
    color: "gray",
    marginTop: "2vh",
  },
  content: {
    marginTop: "0vh",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <p>
        &copy;{new Date().getFullYear()} Frances Bathan | Built with React and
        Material-UI
      </p>
    </div>
  );
};

export default Footer;
