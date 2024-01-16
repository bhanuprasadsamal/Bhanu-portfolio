import React from "react";
import "./Card.css";
import Resume from '../../components/Services/resume.pdf';

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href={Resume} download>
        <button className="c-button">LEARN MORE</button>
      </a>
      
    </div>
  );
};

export default Card;
