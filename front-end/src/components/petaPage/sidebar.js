import React, { useState, useEffect } from "react";
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
import axios from "axios";

function Sidebar({ isOpen }) {
  const [activeButton, setActiveButton] = useState("laporanBtn");
  const [showLaporanDetail, setShowLaporanDetail] = useState(false);
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [showVolunteerDetail, setShowVolunteerDetail] = useState(false);
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [showDonationDetail, setShowDonationDetail] = useState(false);
  const [laporanData, setLaporanData] = useState([]);
  const [volunteerData, setVolunteerData] = useState([]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setShowDonationForm(false);
    setShowVolunteerForm(false);
  };
  useEffect(() => {
    if (activeButton === "laporanBtn") getAllLaporan();
    if (activeButton === "volunteerBtn") getAllVolunteer();
  }, [activeButton]); // Run only once on component mount

  const getAllLaporan = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/pins");
      const data = response.data;
      setLaporanData(data);
    } catch (error) {
      console.error("Error Query:", error);
    }
  };

  const getAllVolunteer = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/volunteer/");

      const data = response.data;
      console.log(data);
      setVolunteerData(data);
    } catch (error) {
      console.error("Error Query:", error);
    }
  };

  const categoryAnimation = useSpring({
    height: isOpen ? "auto" : 0,
    opacity: isOpen ? 1 : 0,
  });

  const renderCard = () => {
    switch (activeButton) {
      case "laporanBtn":
        if (showLaporanDetail) {
          return (
            <LaporanDetail
              showLaporanDetail={showLaporanDetail}
              setShowLaporanDetail={setShowLaporanDetail}
            />
          );
        }
        return laporanData.map((data) => {
          return (
            <>
              <LaporanCard
                key={data._id}
                data={data} // Pass the data as props to LaporanCard component
                showLaporanDetail={showLaporanDetail}
                setShowLaporanDetail={setShowLaporanDetail}
              />
            </>
          );
        });

      case "volunteerBtn":
        console.log(volunteerData);
        if (showVolunteerForm) {
          return (
            <VolunteerForm
              showVolunteerForm={showVolunteerForm}
              setShowVolunteerForm={setShowVolunteerForm}
            />
          );
        }
        if (showVolunteerDetail) {
          return (
            <VolunteerDetail
              showVolunteerDetail={showVolunteerDetail}
              setShowVolunteerDetail={setShowVolunteerDetail}
              showVolunteerForm={showVolunteerForm}
              setShowVolunteerForm={setShowVolunteerForm}
            />
          );
        }
        console.log(volunteerData);
        console.log(showVolunteerDetail);
        console.log(showVolunteerForm);
        return volunteerData.map((data) => {
          return (
            <>
              <VolunteerCard
                key={data._id}
                data={data} // Pass the data as props to LaporanCard component
                showVolunteerForm={showVolunteerForm}
                setShowVolunteerForm={setShowVolunteerForm}
                showVolunteerDetail={showVolunteerDetail}
                setShowVolunteerDetail={setShowVolunteerDetail}
              />
            </>
          );
        });

      case "donationBtn":
        if (showDonationForm) {
          return (
            <DonationForm
              showDonationForm={showDonationForm}
              setShowDonationForm={setShowDonationForm}
            />
          );
        }
        if (showDonationDetail) {
          return (
            <DonationDetail
              showDonationDetail={showDonationDetail}
              setShowDonationDetail={setShowDonationDetail}
              showDonationForm={showDonationForm}
              setShowDonationForm={setShowDonationForm}
            />
          );
        }
        return (
          <>
            <DonationCard
              showDonationForm={showDonationForm}
              setShowDonationForm={setShowDonationForm}
              showDonationDetail={showDonationDetail}
              setShowDonationDetail={setShowDonationDetail}
            />
            <DonationCard
              showDonationForm={showDonationForm}
              setShowDonationForm={setShowDonationForm}
              showDonationDetail={showDonationDetail}
              setShowDonationDetail={setShowDonationDetail}
            />
            <DonationCard
              showDonationForm={showDonationForm}
              setShowDonationForm={setShowDonationForm}
              showDonationDetail={showDonationDetail}
              setShowDonationDetail={setShowDonationDetail}
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
