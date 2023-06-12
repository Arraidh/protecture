import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import * as Icons from "react-bootstrap-icons";
import VolunteerCard from "./volunteerCard";
import DonationCard from "./donationCard";
import LaporanCard from "./laporanCard";
import "../App.css";

function Sidebar({ isOpen }) {
  const [activeButton, setActiveButton] = useState("laporanBtn");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderCard = () => {
    switch (activeButton) {
      case "laporanBtn":
        return (
          <>
            <LaporanCard />
            <LaporanCard />
            <LaporanCard />
            <LaporanCard />
          </>
        );

      case "volunteerBtn":
        return (
          <>
            <VolunteerCard />
            <VolunteerCard />
          </>
        );

      case "donationBtn":
        return (
          <>
            <DonationCard />
            <DonationCard />
            <DonationCard />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`Sidebar shadow-lg ${isOpen ? "" : "d-none"}`}>
      <nav className="row p-3 m-0 shadow-sm mb-4">
        <button
          className={`navItem btn ${
            activeButton === "laporanBtn" ? "btn-success" : "btn-light"
          } d-flex flex-column align-items-center justify-content-center col h-100 w-100 p-0`}
          onClick={() => handleButtonClick("laporanBtn")}
        >
          <Icons.Geo size={36} />
          Laporan
        </button>
        <button
          className={`navItem btn ${
            activeButton === "volunteerBtn" ? "btn-success" : "btn-light"
          } d-flex flex-column align-items-center justify-content-center col h-100 w-100 p-0`}
          onClick={() => handleButtonClick("volunteerBtn")}
        >
          <Icons.PeopleFill size={36} />
          Volunteer
        </button>
        <button
          className={`navItem btn ${
            activeButton === "donationBtn" ? "btn-success" : "btn-light"
          } d-flex flex-column align-items-center justify-content-center col h-100 w-100 p-0`}
          onClick={() => handleButtonClick("donationBtn")}
        >
          <Icons.CashCoin size={36} />
          Donation
        </button>
      </nav>
      <div className=" w-100 p-3 gap-3 d-flex flex-column overflow-y-scroll cardContainer">
        {renderCard()}
      </div>
    </div>
  );
}

export default Sidebar;
