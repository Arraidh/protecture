import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import * as Icons from "react-bootstrap-icons";

function Sidebar() {
  return (
    <div className="Sidebar shadow-lg">
      <nav className="row p-3 m-0 shadow-sm">
        <button className="navItem btn btn-success d-flex flex-column align-items-center justify-content-center col h-100 w-100 p-0">
          <Icons.Geo size={36} />
          Laporan
        </button>
        <button className="navItem btn btn-light d-flex flex-column align-items-center justify-content-center col h-100 w-100 p-0">
          <Icons.PeopleFill size={36} />
          Volunteer
        </button>
        <button className="navItem btn btn-light d-flex flex-column align-items-center justify-content-center col h-100 w-100 p-0">
          <Icons.CashCoin size={36} />
          Donation
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
