import React from "react";
import { makeStyles } from "@material-ui/core";

import puppylovelogo from "../../assets/puppylove_logo.png";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "20vw",
    backgroundColor: "#474a49",
    boxShadow: "0px 10px 10px black",
    fontSize: "9pt",
    padding: "2vh 2vw",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      backgroundColor: "black",
      backgroundImage: `url(${puppylovelogo})`,
      backgroundRepeat: "no-repeat",
      opacity: "0.2",
      color: "white",
    },
  },
  logo: {
    width: "10vw",
    display: "block",
    margin: "0 auto",
  },
  content: {
    color: "white",
  },
}));

const PuppyLove = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={puppylovelogo} alt="puppy love logo" className={classes.logo} />
      <p className={classes.content}>
        Spicy jalapeno bacon ipsum dolor amet labore beef sint shank kevin,
        officia irure salami magna sunt frankfurter porchetta pariatur shoulder
        boudin. Pig salami sed et, pastrami esse pork short ribs dolore ipsum.
        Pig incididunt filet mignon ground round do id pariatur chuck officia
        ham hock beef boudin ut elit capicola. Fugiat quis et turkey porchetta.
        Proident leberkas kevin pork chop.
      </p>
    </div>
  );
};
export default PuppyLove;
