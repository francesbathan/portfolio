import React from "react";
import Typist from "react-typist";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "right",
    fontFamily: "Montserrat",
    marginLeft: "43vw",
    padding: "4vh 2vw",
  },
  hello: {
    color: "gray",
    fontSize: "70pt",
    marginBottom: "0",
  },
  frances: {
    color: "white",
    fontSize: "55pt",
    marginTop: "0",
  },
  work: {
    color: "gray",
    fontSize: "20pt",
    marginTop: "0",
  },
  languages: {
    color: "white",
    fontSize: "20pt",
    marginTop: "0",
  },
}));

const Greeting = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.hello}>Hello,</h1>
      <h1 className={classes.frances}>I'm Frances.</h1>
      <p className={classes.work}>
        I work with{" "}
        <Typist className={classes.languages}>
          <span> JavaScript.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> React.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> Python.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> Node.js.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> Express.js.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> MongoDB.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> MySQL.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> SQLite.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> Django.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> Material-UI.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> JavaScript.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> React.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> Python.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> Node.js.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> Express.js.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> MongoDB.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> MySQL.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> SQLite.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> Django.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> Material-UI.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> JavaScript.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> React.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> Python.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> Node.js.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> Express.js.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> MongoDB.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> MySQL.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> SQLite.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> Django.</span>
          <Typist.Backspace count={20} delay={200} />
          <span> Material-UI.</span>
        </Typist>
      </p>
    </div>
  );
};

export default Greeting;
