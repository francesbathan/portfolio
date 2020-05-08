import React from "react";
import { GitHub, LinkedIn, MailRounded, WorkRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import Typist from "react-typist";

const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: "Montserrat",
    padding: "2vh 5vw 30vh 5vw",
    textAlign: "left",
    fontSize: "9pt",
  },
  contact: {
    display: "flex",
    margin: "4vh 0vw",
    color: "white",
  },
  icons: {
    verticalAlign: "middle",
    marginRight: "2vw",
    cursor: "pointer",
    fill: "gray",
    "&:hover": {
      fill: "white",
    },
  },
  link: {
    verticalAlign: "middle",
    cursor: "pointer",
    "&:hover": {
      color: "lightgray",
    },
  },
  hello: {
    color: "gray",
    fontWeight: "700",
    fontSize: "20pt",
    letterSpacing: "0.3em",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typist className={classes.languages}>
        <span className={classes.hello}>HOW TO FIND ME:</span>
      </Typist>
      <div className={classes.contact}>
        <GitHub
          className={classes.icons}
          fontSize="small"
          onClick={() => window.open("https://github.com/francesbathan")}
        />
        <span
          className={classes.link}
          onClick={() => window.open("https://github.com/francesbathan")}
        >
          https://github.com/francesbathan
        </span>
      </div>
      <div className={classes.contact}>
        <LinkedIn
          className={classes.icons}
          fontSize="small"
          onClick={() => window.open("https://linkedin.com/in/frncsbthn")}
        />
        <span
          className={classes.link}
          onClick={() => window.open("https://linkedin.com/in/frncsbthn")}
        >
          https://linkedin.com/in/frncsbthn
        </span>
      </div>
      <div className={classes.contact}>
        <MailRounded
          className={classes.icons}
          fontSize="small"
          onClick={() => window.open("mailto:bathanfrances@gmail.com")}
        />
        <span
          className={classes.link}
          onClick={() => window.open("mailto:bathanfrances@gmail.com")}
        >
          bathanfrances@gmail.com
        </span>
      </div>
      <div className={classes.contact}>
        <WorkRounded
          className={classes.icons}
          fontSize="small"
          onClick={() =>
            window.open(
              "https://www.dropbox.com/s/wgk4g2exkaqy0qo/Frances-Bathan-Resume.pdf?dl=0"
            )
          }
        />
        <span
          className={classes.link}
          onClick={() =>
            window.open(
              "https://www.dropbox.com/s/wgk4g2exkaqy0qo/Frances-Bathan-Resume.pdf?dl=0"
            )
          }
        >
          view my resume
        </span>
      </div>
    </div>
  );
};
export default Contact;
