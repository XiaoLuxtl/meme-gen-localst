import React from "react";
import "./ImageWithText.css";

function ImageWithText({ imageSrc, textTop, textBottom, fontsize = 32 }) {
  const fontSize = fontsize;

  return (
    <div className="image-with-text">
      <div className="image-container">
        <img src={imageSrc} alt="Current editing image" />

        {textTop && (
          <div className="text-top" style={{ fontSize: `${fontSize}px` }}>
            {textTop}
          </div>
        )}
        {textBottom && (
          <div className="text-bottom" style={{ fontSize: `${fontSize}px` }}>
            {textBottom}
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageWithText;
