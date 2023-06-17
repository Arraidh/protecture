import React, { useState } from "react";
import * as Icons from "react-bootstrap-icons";
import DonationCard from "./Card/donationCard";
import LaporanCard from "./Card/laporanCard";
import LaporanDetail from "./Detail/laporanDetail";
import { useSpring, animated } from "react-spring";
import VolunteerCard from "./Card/volunteerCard";
import VolunteerDetail from "./Detail/volunteerDetail";
import VolunteerForm from "./Form/volunteerForm";
import DonationForm from "./Form/donationForm";
import DonationDetail from "./Detail/donationDetail";

function Sidebar({ isOpen }) {
  const [activeButton, setActiveButton] = useState("laporanBtn");
  const [showLaporanDetail, setShowLaporanDetail] = useState(false);
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [showVolunteerDetail, setShowVolunteerDetail] = useState(false);
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [showDonationDetail, setShowDonationDetail] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setShowDonationForm(false);
    setShowVolunteerForm(false);
  };

  const categoryAnimation = useSpring({
    height: isOpen ? "auto" : 0,
    opacity: isOpen ? 1 : 0,
  });

  const renderCard = () => {
    switch (activeButton) {
      case "laporanBtn":
        if (showLaporanDetail){
          return (
            <LaporanDetail
              showLaporanDetail={showLaporanDetail}
              setShowLaporanDetail = {setShowLaporanDetail}
            />
          )
        };
        return (
          <>
            <LaporanCard 
              showLaporanDetail={showLaporanDetail}
              setShowLaporanDetail = {setShowLaporanDetail}
            />
            <LaporanCard 
              showLaporanDetail={showLaporanDetail}
              setShowLaporanDetail = {setShowLaporanDetail}
            />
            <LaporanCard 
              showLaporanDetail={showLaporanDetail}
              setShowLaporanDetail = {setShowLaporanDetail}
            />
            <LaporanCard 
              showLaporanDetail={showLaporanDetail}
              setShowLaporanDetail = {setShowLaporanDetail}
            />
          </>
        );

      case "volunteerBtn":
        if (showVolunteerForm) {
          return (
            <VolunteerForm
              showVolunteerForm={showVolunteerForm}
              setShowVolunteerForm={setShowVolunteerForm}
            />
          );
        }
        if (showVolunteerDetail){
          return (
            <VolunteerDetail
              showVolunteerDetail={showVolunteerDetail}
              setShowVolunteerDetail = {setShowVolunteerDetail}
              showVolunteerForm={showVolunteerForm}
              setShowVolunteerForm={setShowVolunteerForm}
            />
          )
        };
        return (
          <>
            <VolunteerCard
              showVolunteerForm={showVolunteerForm}
              setShowVolunteerForm={setShowVolunteerForm}
              showVolunteerDetail={showVolunteerDetail}
              setShowVolunteerDetail = {setShowVolunteerDetail}
            />
            <VolunteerCard
              showVolunteerForm={showVolunteerForm}
              setShowVolunteerForm={setShowVolunteerForm}
              showVolunteerDetail={showVolunteerDetail}
              setShowVolunteerDetail = {setShowVolunteerDetail}
            />
          </>
        );

      case "donationBtn":
        if (showDonationForm) {
          return (
            <DonationForm
              showDonationForm={showDonationForm}
              setShowDonationForm={setShowDonationForm}
            />
          );
        }
        if (showDonationDetail){
          return (
            <DonationDetail
              showDonationDetail={showDonationDetail}
              setShowDonationDetail = {setShowDonationDetail}
              showDonationForm={showDonationForm}
              setShowDonationForm={setShowDonationForm}
            />
          )
        };
        return (
          <>
            <DonationCard
              showDonationForm={showDonationForm}
              setShowDonationForm={setShowDonationForm}
              showDonationDetail={showDonationDetail}
              setShowDonationDetail = {setShowDonationDetail}
            />
            <DonationCard
              showDonationForm={showDonationForm}
              setShowDonationForm={setShowDonationForm}
              showDonationDetail={showDonationDetail}
              setShowDonationDetail = {setShowDonationDetail}
            />
            <DonationCard
              showDonationForm={showDonationForm}
              setShowDonationForm={setShowDonationForm}
              showDonationDetail={showDonationDetail}
              setShowDonationDetail = {setShowDonationDetail}
            />
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
          {renderCard()}
        </div>
      </div>
    </animated.div>
  );
}

export default Sidebar;
