import React, { useEffect, useState } from "react";
import "../styles/ImageViewer.css";

const ImageViewer = () => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    fetch("/output.json")
      .then((res) => res.json())
      .then((data) => setBoxes(data.detection_results));
  }, []);

  return (
    <div className="image-viewer">
    <div className="image-container">
      <img src="/image.png" alt="Whole Slide" className="slide-image" />
    </div>
      {boxes?.map((box, index) => (
        <div
          key={index}
          className="bounding-box"
          style={{
            left: box.x,
            top: box.y,
            width: box.width,
            height: box.height,
          }}
        />
      ))}
    </div>
  );
};

export default ImageViewer;
