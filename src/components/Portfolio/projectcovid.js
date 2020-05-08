import React from "react";
import { makeStyles } from "@material-ui/core";

// import Button from "./button";

import covid from "../../assets/covid_wht.png";
import covidbg from "../../assets/covid_bg.png";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "25vw",
    backgroundColor: "black",
    boxShadow: "0px 10px 10px black",
    fontSize: "9pt",
    marginLeft: "2vw",
    padding: "7.3vh 2vw",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      backgroundColor: "black",
      backgroundImage: `url(${covidbg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: "0.2",
      color: "black",
      borderRadius: "5px",
    },
  },
  logo: {
    height: "3vw",
    display: "block",
    margin: "0 auto",
  },
  content: {
    color: "white",
    paddingTop: "2vh",
  },
}));

const ProjectCovid = () => {
  const classes = useStyles();

  return (
    <>
      <div
        className={classes.container}
        onClick={() =>
          window.open("https://github.com/francesbathan/project-covid")
        }
      >
        <img src={covid} alt="project covid logo" className={classes.logo} />
        <p className={classes.content}>
          Spicy jalapeno bacon ipsum dolor amet burgdoggen cow bacon, landjaeger
          bresaola jerky pastrami brisket sausage chislic filet mignon venison.
          Chuck venison burgdoggen meatball. Chuck kielbasa prosciutto shankle
          corned beef, tail doner pork belly flank ribeye ham hock biltong jerky
          turkey ground round. Shank salami sirloin turducken porchetta brisket,
          kevin sausage. Swine pig tenderloin, corned beef bresaola buffalo ham
          meatloaf rump beef.
        </p>
      </div>
      {/* <Button /> */}
    </>
  );
};
export default ProjectCovid;
