import React from "react";
import { makeStyles } from "@material-ui/core";
import Typist from "react-typist";
import pic from "../../assets/pic.png";
import "../../css/about.module.scss";

const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: "Montserrat",
    padding: "2vh 5vw 5vh 5vw",
    textAlign: "left",
    display: "flex",
  },
  hello: {
    color: "gray",
    fontWeight: "700",
    fontSize: "20pt",
    letterSpacing: "0.3em",
  },
  paragraph: {
    color: "white",
    fontSize: "10pt",
  },
  dog: {
    color: "gray",
    fontSize: "8pt",
  },
  pic: {
    height: "50vh",
    marginTop: "3vh",
    marginRight: "4vw",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <img className={classes.pic} src={pic} alt="profile pic" />
      </div>
      <div>
        <Typist className={classes.languages}>
          <span className={classes.hello}>HELLO THERE.</span>
        </Typist>

        <p className={classes.paragraph}>
          My name is Frances. I'm a full stack developer versed in React,
          Node.js, Express, MongoDB, and Django, as well as a graphic designer
          proficient in Adobe Photoshop. I've always had a passion for design
          and I love being creative with my work, which is why I also love
          writing a lot of CSS and employing the help of Material-UI and
          Bootstrap.
        </p>
        <p className={classes.paragraph}>
          High school introduced me to the world of programming and I loved it!
          However, I thought I wanted to be in business.
        </p>
        <p className={classes.paragraph}>
          I graduated college with an Entrepreneurship degree, but that didn't
          go anywhere and I felt completely stuck in my career. When my husband
          became a software engineer, it inspired me to code again, combine it
          with my graphic design skills, and create intuitive websites. I'm
          currently working on several different projects and I'm excited to do
          more!
        </p>
        <p className={classes.paragraph}>
          When I'm not coding, I love doing movie marathons with my family and
          playing Animal Crossing on my Switch. Theater and music are also a
          huge thing for us, so you'll often see us going to concerts and
          musicals.
        </p>
        <p className={classes.paragraph}>
          Please visit my portfolio to see more of my work.
        </p>
        <p className={classes.dog}>And please tell your dog I said hi.</p>
      </div>
    </div>
  );
};
export default About;
