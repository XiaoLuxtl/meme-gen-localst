import React, { useState } from "react";
import ImageWithText from "../image/imagewithtext";
import DownloadElement from "../descarga/downloadelement";

function UploadImage() {
  const [image, setImage] = useState(null);
  const [topText, setTopText] = useState("");
  const [botText, setBotText] = useState("");
  const [fontSize, setFontSize] = useState(32);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      localStorage.setItem("tmpimage", reader.result);
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleText = (e, op) => {
    const text = e.target.value;

    if (op === 1) {
      setTopText(text.toUpperCase());
    }

    if (op === 2) {
      setBotText(text.toUpperCase());
    }
  };

  const handleFontSize = (e) => {
    const val = e.target.value;
    setFontSize(val);
  };

  return (
    <div>
      <div id="capture">
        {image && (
          <ImageWithText
            imageSrc={image}
            textBottom={botText}
            textTop={topText}
            fontsize={fontSize}
          />
        )}
      </div>
      <input type="file" onChange={handleImageChange} />
      <div>
        <p>Texto arriba</p>

        <input type="text" onChange={(e) => handleText(e, 1)} />
      </div>
      <div>
        <p>Texto abajo</p>
        <input type="text" onChange={(e) => handleText(e, 2)} />
      </div>
      <div>
        <p>Tamaño de la fuente</p>
        <input
          type="number"
          min="22"
          max="72"
          value={fontSize}
          onChange={(e) => handleFontSize(e)}
        />
      </div>

      <DownloadElement elemento={image} />
    </div>
  );
}

export default UploadImage;
