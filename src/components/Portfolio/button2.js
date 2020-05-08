import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "black",
    fontFamily: "Montserrat",
    borderRadius: "5px",
    padding: "1vh 1vw",
    cursor: "pointer",
    display: "block",
    color: "white",
    border: "none",
    margin: "2vh auto",
    outline: "none",
    "&:hover": {
      backgroundColor: "#0c0c0c",
    },
  },
}));

const Button2 = () => {
  const classes = useStyles();

  return (
    <div>
      <button
        className={classes.button}
        onClick={() =>
          window.open("https://github.com/francesbathan/project-covid")
        }
      >
        View Repository
      </button>
    </div>
  );
};
export default Button2;
