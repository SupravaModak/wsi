import React from "react";
import "../styles/ZoomedView.css";

const ZoomedView = () => {
  return (
    <div className="zoomed-view">
      <h3>Zoomed Out View</h3>
      <img src="/image.png" alt="Zoomed Out" className="zoom-image" />
    </div>
  );
};

export default ZoomedView;
