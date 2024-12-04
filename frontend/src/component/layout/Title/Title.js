import React from "react";
import "./Title.css";
const Title = ({ text1, text2 }) => {
  return (
    <div className="mainArea">
      <p className="textOne">
        {text1} <span className="textTwo">{text2}</span>
      </p>
      <p className="headingLine"></p>
    </div>
  );
};

export default Title;
