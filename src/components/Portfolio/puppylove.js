import React from "react";
import { makeStyles, Modal } from "@material-ui/core";

import puppylovelogo from "../../assets/puppylove_logo.png";
import puppy from "../../assets/puppy_bg.png";

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
    padding: "2vh 2vw",
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
    backgroundImage: `url(${puppy})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    outline: "none",
    cursor: "pointer",
  },
  logo: {
    height: "7.9vw",
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

const PuppyLove = () => {
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
        <img
          src={puppylovelogo}
          alt="puppy love logo"
          className={classes.logo}
        />
        <p className={classes.content}>
          A fun web app inspired by popular Twitter page, WeRateDogs, that
          allows users to upload their dogs and rate others' dogs. It offers an
          intuitive user interface created with HTML and CSS with a backend
          server and database developed with Django. JavaScript was also
          integrated to create a responsive slider for a more immersive rating
          experience.
        </p>
        <p className={classes.content}>
          Technologies used:
          <br />
          Python, Django, JavaScript, HTML, CSS
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
export default PuppyLove;
