import React, { useState, useEffect } from "react";
import * as Icons from "react-bootstrap-icons";
import axios from "axios";

const LaporanDetail = ({ showLaporanDetail, setShowLaporanDetail, showLaporanUpdateForm, setShowLaporanUpdateForm  }) => {
  const [userName, setUserName] = useState("");
  const buttonHandlerClick = () => {
    setShowLaporanDetail(null);
  };

  const buttonHandlerClickUpdate = () => {
    setShowLaporanDetail(false);
    setShowLaporanUpdateForm(true);
  };

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (showLaporanDetail.user) {
          const response = await axios.get(
            `http://localhost:8800/api/users/${showLaporanDetail.user}`
          );
          const user = response.data;
          setUserName(user.username);
        } else {
          setUserName("user");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserName();
  }, [showLaporanDetail.user]);

  const getTimestampDifference = () => {
    const reportTimestamp = new Date(showLaporanDetail.updatedAt);
    const currentTimestamp = new Date();

    const timeDiff = currentTimestamp.getTime() - reportTimestamp.getTime();
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));

    return hoursDiff;
  };
  return (
    <div className="laporanContainer">
      <button
        className="btn btn-light text-success d-flex gap-4 p-3"
        onClick={buttonHandlerClick}
      >
        <Icons.ArrowLeftCircleFill size={36} />
        <span className="fs-4 text-dark">Kembali</span>
      </button>

      <div className="d-flex flex-column gap-1 mt-3">
      <button
          className="btn btn-light text-primary align-items-center d-flex ms-auto gap-2 p-1"
          onClick={buttonHandlerClickUpdate}
        >
          <Icons.PencilSquare size={20} />
          <span className="fs-7">Edit Laporan</span>
        </button>
        <div className="reportHeader mb-3 mt-4">
          <h3>{showLaporanDetail.title}</h3>
        </div>
        <div
          id="carouselExampleControls"
          class="carousel slide mb-4"
          data-mdb-ride="carousel"
        >
          <div class="carousel-inner rounded-3 shadow-4-strong">
            <div class="carousel-item active">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                class="d-block w-100"
                alt="Wild Landscape"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                class="d-block w-100"
                alt="Camera"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                class="d-block w-100"
                alt="Exotic Fruits"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-mdb-target="#carouselExampleControls"
            data-mdb-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-mdb-target="#carouselExampleControls"
            data-mdb-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="d-flex flex-row profileReport">
          <div>
            <Icons.PersonCircle size={48} />
          </div>
          <div className="d-flex flex-column ms-4">
            <div className="reportReporter">{userName}</div>
            <div className="reportTimestamp">
              {getTimestampDifference()} hours Ago
            </div>
          </div>
          <div className="ms-auto reportReporterRole">
            <button type="button" class="btn btn-secondary" disabled>
              Admin
            </button>
          </div>
        </div>
        <div className="mt-4 reportCoordinates">
          <Icons.GeoAlt size={24} />{" "}
          <span>
            {showLaporanDetail.city}, {showLaporanDetail.country}
          </span>
        </div>
        <div className="mt-4 me-3 reportDesc">
          <p>{showLaporanDetail.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default LaporanDetail;
