import React from "react";
import ImageViewer from "./components/ImageViewer";
import Sidebar from "./components/Sidebar";
import ZoomedView from "./components/ZoomedView";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-view">
        <ZoomedView />
        <ImageViewer />
      </div>
    </div>
  );
};

export default App;
