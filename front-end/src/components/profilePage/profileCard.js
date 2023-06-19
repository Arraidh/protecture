import React, { useState, useEffect, useContext } from "react";
import * as Icons from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import EditProfileForm from "./editProfileForm";
import LaporanCard from "../petaPage/Card/laporanCard";
import VolunteerCard from "../petaPage/Card/volunteerCard";
import DonationCard from "../petaPage/Card/donationCard";
import { Border } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { AuthContext, AuthProvider } from "../../utils/useAuth";

const ProfileCard = ({ showEditProfile, setShowEditProfileForm, data }) => {
  const [activeButton, setActiveButton] = useState("laporanBtn");
  const [laporanData, setLaporanData] = useState([]);
  const [volunteerData, setVolunteerData] = useState([]);
  const [donationData, setDonationData] = useState([]);
  const [userDonationData, setUserDonationData] = useState([]);
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [showDonationForm, setShowDonationForm] = useState(false);
  const { isLoggedIn, login, userData, setUserData } = useContext(AuthContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (activeButton === "laporanBtn") getAllLaporan();
    if (activeButton === "volunteerBtn") getAllVolunteer();
    if (activeButton === "donationBtn") getAllUserDonations();
    fetchUserName();
  }, [activeButton]); // Run only once on component mount

  const editButtonHandlerClick = () => {
    setShowEditProfileForm(true);
  };

  const fetchUserName = async () => {
    try {
      if (userData) {
        const response = await axios.get(
          `http://localhost:8800/api/users/${userData}`
        );
        const user = response.data;
        setUser(user);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setShowDonationForm(false);
    setShowVolunteerForm(false);
  };

  const getAllLaporan = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/api/pins/user/${userData}`
      );
      const data = response.data;
      setLaporanData(data);
    } catch (error) {
      console.error("Error Query:", error);
    }
  };

  const getAllVolunteer = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/api/volunteer/registered-by/${userData}`
      );

      const data = response.data;
      setVolunteerData(data);
    } catch (error) {
      console.error("Error Query:", error);
    }
  };

  const getAllUserDonations = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/api/donations/userDonations/user/${userData}`
      );
      const data = response.data;
      setUserDonationData(data);
    } catch (error) {
      console.error("Error Query:", error);
    }
  };

  const renderCard = () => {
    switch (activeButton) {
      case "laporanBtn":
        return laporanData.map((data) => {
          return (
            <>
              <LaporanCard
                key={data._id}
                data={data} // Pass the data as props to LaporanCard component
              />
            </>
          );
        });

      case "volunteerBtn":
        return volunteerData.map((data) => {
          return (
            <>
              <VolunteerCard
                key={data._id}
                data={data} // Pass the data as props to LaporanCard component
              />
            </>
          );
        });

      case "donationBtn":
        const donationCards = userDonationData.map((data) => {
          // getDonationsById(data.Donation);
          const updatedAt = new Date(data.updatedAt);
          const formattedDate = updatedAt.toLocaleString();
          return (
            <div className="card shadow donationCard" key={data._id}>
              <div className="card-body gap-2 p-4 d-flex flex-column">
                <div>
                  <h3 className="text-success fw-bolder">
                    {data.donationTitle ? data.donationTitle : data._id}
                  </h3>
                  <p className="d-inline m-0">
                    Menanggapi Laporan
                    <span className="badge text-bg-success m-2">Kebakaran</span>
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 justify-content-between ">
                  <p className="fs-5 fw-bolder mb-0">Donasi Konservasi </p>
                </div>
                <div className="d-flex align-items-center gap-2 justify-content-between row">
                  <p className="fs-4 fw-bolder col">
                    Rp {data.amount}{" "}
                    <span className="text-success fs-6">Didonasikan</span>
                  </p>
                  <p className="fs-6 col text-right">{formattedDate}</p>
                </div>
                <div className="d-flex align-items-center gap-2  justify-content-end"></div>
              </div>
            </div>
          );
        });

        return donationCards;

      default:
        return null;
    }
  };

  return (
    <>
      <div
        className="profile_container container mt-5 p-5 mb-5"
        style={{
          border: "2px solid rgba(0, 0, 0, 0.2)",
          borderRadius: "20px",
        }}
      >
        <Row>
          <Col>
            <h2 className="">Hello there, {user.username}</h2>
            <div className="profile-card">
              <div className="row align-items-center">
                <div className="col-auto">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                    className="card-img-top img-fluid rounded-circle"
                    style={{ width: "100px", height: "100px" }}
                    alt="Profile Picture"
                  />
                </div>
                <div className="col">
                  <div className="main-profile-info">
                    <h5 className="username"> {user.username}</h5>
                    <p className="user-email"> {user.email}</p>
                  </div>
                </div>
                <div className="col">
                  <div className="main-profile-info">
                    <p
                      className="user-address bg-success"
                      style={{
                        color: "white",
                        display: "inline-block",
                        padding: "5px 10px 5px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      Domisili : {user.city}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <Link
                  to="/editProfileForm"
                  className="btn btn-success gap-2 d-flex align-items-center"
                  style={{ display: "inline", width: "150px" }}
                >
                  {" "}
                  <Icons.PencilSquare />
                  Edit Profil
                </Link>
              </div>
            </div>
          </Col>

          <Col>
            <div className={`Sidebar shadow`}>
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
                    activeButton === "volunteerBtn"
                      ? "btn-success"
                      : "btn-light"
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
                {Array.isArray(donationData) ||
                Array.isArray(volunteerData) ||
                Array.isArray(laporanData)
                  ? renderCard()
                  : null}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProfileCard;
