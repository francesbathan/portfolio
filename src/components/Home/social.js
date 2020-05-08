import React from "react";
import { GitHub, LinkedIn, MailRounded, WorkRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "30vh",
  },
  icons: {
    fill: "white",
    cursor: "pointer",
    alignItems: "space-between",
    "&:hover": {
      fill: "gray",
    },
    margin: "2vh 0vw",
  },
}));

const Social = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <GitHub
        className={classes.icons}
        fontSize="small"
        onClick={() => window.open("https://github.com/francesbathan")}
      />

      <LinkedIn
        className={classes.icons}
        fontSize="small"
        onClick={() => window.open("https://linkedin.com/in/frncsbthn")}
      />
      <MailRounded
        className={classes.icons}
        fontSize="small"
        onClick={() => window.open("mailto:bathanfrances@gmail.com")}
      />
      <WorkRounded
        className={classes.icons}
        fontSize="small"
        onClick={() =>
          window.open(
            "https://www.dropbox.com/s/wgk4g2exkaqy0qo/Frances-Bathan-Resume.pdf?dl=0"
          )
        }
      />
    </div>
  );
};
export default Social;
