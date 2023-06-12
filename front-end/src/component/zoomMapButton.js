import React from "react";
import "../App.css";
import * as Icons from "react-bootstrap-icons";

const ZoomMapButton = () => {
  return (
    <div className="zoomButtonContainer d-flex flex-column ">
      <button className="btn btn-light p-2 shadow-sm">
        <Icons.Plus size={36} />
      </button>
      <button className="btn btn-light p-2 shadow-sm">
        <Icons.Dash size={36} />
      </button>
    </div>
  );
};

export default ZoomMapButton;
