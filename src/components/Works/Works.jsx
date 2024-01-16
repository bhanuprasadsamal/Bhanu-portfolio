import React, { useContext } from "react";
import "./Works.css";
import Python from "../../img/file.png";
import Java from "../../img/javascript.png";
import Android from "../../img/android.png";
import CPlus from "../../img/c-logo.png";
import C from "../../img/c-.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            All these
          </span>
          <span>Coding Language Known</span>
          <spane>
            All this conding language is reading in College,
            <br />
            Or my-self in the free times
            
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button" href="bhanuprasadsamal@gmail.com">Email</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle" onClick={() => window.location.href = "https://www.w3schools.com/python/python_intro.asp"}>
            <img src={Python} alt="" />
          </div>
          <div className="w-secCircle" onClick={() => window.location.href = "https://www.w3schools.com/java/default.asp"}>
            <img src={Java} alt="" />
          </div>
          <div className="w-secCircle" >
            <a href="https://developer.android.com/studio?gclid=CjwKCAiAqY6tBhAtEiwAHeRopX6lMOkLmbQx2IhzEvzRMZ6ubnDM2q2P7328CILoNr26hDHNWe1ZrBoCkjAQAvD_BwE&gclsrc=aw.ds" target="_blank" rel="noopener noreferrer">
              <img src={Android} alt="" />
            </a>
          </div>
          <div className="w-secCircle" onClick={() => window.location.href = "https://www.w3schools.com/cpp/default.asp"}>
            <img src={CPlus} alt="" />
          </div>
          <div className="w-secCircle" onClick={() => window.location.href = "https://www.w3schools.com/c/c_intro.php"}>
            <img src={C} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
