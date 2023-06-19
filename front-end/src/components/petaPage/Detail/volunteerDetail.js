import React, { useState, useEffect } from "react";
import * as Icons from "react-bootstrap-icons";
import axios from "axios";

const VolunteerDetail = ({
  showVolunteerDetail,
  setShowVolunteerDetail,
  showVolunteerForm,
  setShowVolunteerForm,
  showVolunteerUpdateForm,
  setShowVolunteerUpdateForm,
}) => {
  const [userName, setUserName] = useState("");
  const buttonHandlerClickDetail = () => {
    setShowVolunteerDetail(null);
  };
  const buttonHandlerClick = () => {
    setShowVolunteerForm(showVolunteerDetail);
  };
  const buttonHandlerClickUpdate = () => {
    setShowVolunteerDetail(null);
    setShowVolunteerUpdateForm(showVolunteerDetail);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const getTimestampDifference = () => {
    const reportTimestamp = new Date(showVolunteerDetail.updatedAt);
    const currentTimestamp = new Date();

    const timeDiff = currentTimestamp.getTime() - reportTimestamp.getTime();
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));

    return hoursDiff;
  };
  console.log(showVolunteerDetail.user);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (showVolunteerDetail.user) {
          const response = await axios.get(
            `http://localhost:8800/api/users/${showVolunteerDetail.user}`
          );
          console.log(response);
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
  }, [showVolunteerDetail.user]);

  return (
    <div className="volunteerContainer">
      <button
        className="btn btn-light text-success d-flex gap-4 p-3"
        onClick={buttonHandlerClickDetail}
      >
        <Icons.ArrowLeftCircleFill size={36} />
        <span className="fs-4 text-dark">Kembali</span>
      </button>
      <div className="d-flex flex-column gap-1 mt-3">
        {/* <button
          className="btn btn-light text-primary align-items-center d-flex ms-auto gap-2 p-1"
          onClick={buttonHandlerClickUpdate}
        >
          <Icons.PencilSquare size={20} />
          <span className="fs-7">Edit Volunteer</span>
        </button> */}
        <div className="reportHeader mb-1 mt-4">
          <h3>{showVolunteerDetail.title}</h3>
        </div>
        <div>
          <p className="d-inline m-0">
            Menanggapi Laporan
            <span className="badge text-bg-success m-2">Kebakaran</span>
          </p>
        </div>
        <div className="d-flex flex-row profileReport mt-3">
          <div>
            <Icons.PersonCircle size={48} />
          </div>
          <div className="d-flex flex-column ms-4 ">
            <div className="reportReporter">{userName}</div>
            <div className="reportTimestamp">
              {" "}
              {getTimestampDifference()} hours Ago
            </div>
          </div>
          <div className="ms-auto reportReporterRole">
            <button type="button" class="btn btn-secondary" disabled>
              Admin
            </button>
          </div>
        </div>
        <div className="bg-success-subtle border-success-subtle rounded-3 p-3 mt-3">
          <div className="d-flex align-items-center gap-2 mt-2 mb-2">
            <Icons.People size={24} />{" "}
            <span>{showVolunteerDetail.volunteers.length} Relawan</span>
          </div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <Icons.Calendar2Event size={24} />{" "}
            <span>{formatDate(showVolunteerDetail.timestamp)}</span>
          </div>
          <div className="d-flex align-items-center gap-2 justify-content-between">
            <div>
              <Icons.GeoAlt size={24} />{" "}
              <span>
                {showVolunteerDetail.city}, {showVolunteerDetail.country}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 me-3 reportDesc">
          <p>{showVolunteerDetail.description}</p>
        </div>

        <div className="mt-4 ms-auto reportCoordinates">
          <button
            type="button"
            class="btn btn-success gap-2 d-flex align-items-center"
            onClick={buttonHandlerClick}
          >
            <Icons.Box /> Mulai Berkontribusi
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetail;
