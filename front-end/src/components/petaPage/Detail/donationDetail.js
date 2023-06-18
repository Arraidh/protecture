import React, { useState, useEffect } from "react";
import * as Icons from "react-bootstrap-icons";
import axios from "axios";

const DonationDetail = ({
  showDonationDetail,
  setShowDonationDetail,
  showDonationForm,
  setShowDonationForm,
  showDonationUpdateForm,
  setShowDonationUpdateForm,
}) => {
  const [userName, setUserName] = useState("");
  const buttonHandlerClickDetail = () => {
    setShowDonationDetail(false);
  };
  const buttonHandlerClick = () => {
    setShowDonationDetail(false);
    setShowDonationForm(showDonationDetail);
  };
  const buttonHandlerClickUpdate = () => {
    setShowDonationDetail(false);
    setShowDonationUpdateForm(showDonationDetail);
  };

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (showDonationDetail.user) {
          const response = await axios.get(
            `http://localhost:8800/api/users/${showDonationDetail.user}`
          );
          console.log(response);
          const user = response.data;
          setUserName(user.username);
        } else {
          setUserName("user");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setUserName("user");
      }
    };
    fetchUserName();
  }, [showDonationDetail.user]);

  const getTimestampDifference = () => {
    const reportTimestamp = new Date(showDonationDetail.updatedAt);
    const currentTimestamp = new Date();

    const timeDiff = currentTimestamp.getTime() - reportTimestamp.getTime();
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));

    return hoursDiff;
  };
  return (
    <div className="donationContainer">
      <button
        className="btn btn-light text-success d-flex gap-4 p-3"
        onClick={buttonHandlerClickDetail}
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
          <span className="fs-7">Edit Donasi</span>
        </button>
        <div className="reportHeader mb-1 mt-4">
          <h3>{showDonationDetail.title}</h3>
        </div>
        <div>
          <p className="d-inline m-0">
            Menanggapi Laporan
            <span className="badge text-bg-success m-2">Kebakaran</span>
          </p>
        </div>
        <div className="my-5 bg-success-subtle border-success-subtle rounded-3 p-3">
          <div className="d-flex align-items-center gap-2 justify-content-between ">
            <p className="fs-5 fw-bolder mb-0">Donasi Konservasi </p>
            <p className="fs-6 mb-0">Tersisa 9 jam</p>
          </div>
          <div className="d-flex align-items-center gap-2 justify-content-between ">
            <p className="fs-4 fw-bolder">
              Rp {showDonationDetail.donationGoal.toLocaleString()}{" "}
              <span className="text-success fs-6">Terkumpul</span>
            </p>
            <p className="fs-6">Berakhir pada 30/05/2023</p>
          </div>
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
        <div className="mt-4 me-3 reportDesc">
          <p>{showDonationDetail.description}</p>
        </div>

        <div className="d-flex align-items-center gap-2  justify-content-end">
          <button
            type="button"
            className="btn btn-success gap-2 d-flex align-items-center"
            onClick={buttonHandlerClick}
          >
            {" "}
            <Icons.Box />
            Mulai Berkontribusi
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationDetail;
