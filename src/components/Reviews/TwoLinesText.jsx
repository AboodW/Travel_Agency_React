import React, { useState } from "react";
import "./TwoLinesText.css";

function TwoLinesText({ text }) {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const divStyle = {
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  return (
    <div className="twoLines-container">
      <div className="textFamily" style={!showFullText ? divStyle : {}}>
        {text}
      </div>
      <div>
        <button onClick={toggleText}>
          {showFullText ? "Hide" : "View More"}
        </button>
      </div>
    </div>
  );
}

export default TwoLinesText;
