import React, { useState } from "react";
import * as Icons from "react-bootstrap-icons";
import DonationCard from "./Card/donationCard";
import LaporanCard from "./Card/laporanCard";
import { useSpring, animated } from "react-spring";
import VolunteerCard from "./Card/volunteerCard";
import VolunteerForm from "./Form/volunteerForm";
import DonationForm from "./Form/donationForm";

function Sidebar({ isOpen }) {
  const [activeButton, setActiveButton] = useState("laporanBtn");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const categoryAnimation = useSpring({
    height: isOpen ? "auto" : 0,
    opacity: isOpen ? 1 : 0,
  });

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
    <animated.div style={categoryAnimation}>
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
          {/* <VolunteerForm /> */}
          <DonationForm />
          {/* {renderCard()} */}
        </div>
      </div>
    </animated.div>
  );
}

export default Sidebar;
