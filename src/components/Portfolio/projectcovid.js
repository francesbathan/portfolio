import React from "react";
import { makeStyles, Modal } from "@material-ui/core";

import covid from "../../assets/covid_wht.png";
import covidbg from "../../assets/covid_bg.png";

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: "25vw",
    fontFamily: "Montserrat",
    backgroundColor: "black",
    boxShadow: "0px 10px 10px black",
    fontSize: "9pt",
    marginLeft: "2vw",
    padding: "5.3vh 2vw",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    position: "absolute",
    width: 900,
    height: 420,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    backgroundColor: "black",
    backgroundImage: `url(${covidbg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    outline: "none",
    cursor: "pointer",
  },
  logo: {
    height: "3vw",
    display: "block",
    margin: "0 auto",
  },
  content: {
    color: "white",
    paddingTop: "2vh",
    textAlign: "center",
  },
  preview: {
    color: "gray",
    opacity: "0.5",
    margin: "17vh 17vw",
    fontSize: "80pt",
    transform: "rotate(-45deg)",
  },
  exit: {
    fontSize: "8pt",
    color: "gray",
    fontStyle: "oblique",
    cursor: "pointer",
    "&:hover": {
      color: "white",
    },
  },
}));

const ProjectCovid = () => {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const body = (
    <>
      <div style={modalStyle} className={classes.paper}>
        <h1 className={classes.preview}>Preview</h1>
      </div>
    </>
  );

  return (
    <>
      <div className={classes.container} onClick={handleOpen}>
        <img src={covid} alt="project covid logo" className={classes.logo} />
        <p className={classes.content}>
          A collaborative project to streamline the search for COVID-19 testing
          centers by a user-given city or zip code parameter. Utilizing
          JavaScript with React and Material-UI, it provides the user a
          responsive and seamless experience that allows them to search and
          submit testing centers, find resources and general information about
          the virus, and donate to organizations and relief funds.
        </p>
        <p className={classes.content}>
          Technologies used:
          <br />
          JavaScript, React, Express.js, Node.js, MongoDB, Mongoose,
          Material-UI, CSS
        </p>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </>
  );
};
export default ProjectCovid;
