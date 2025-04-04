import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Details Panel</h2>
      <p>Bounding Box Data</p>
      <ul>
        <li>Zoom Level: 100%</li>
        <li>Detections: 50</li>
      </ul>
    </div>
  );
};

export default Sidebar;
