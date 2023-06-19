import React, { useEffect, useState } from "react";
import * as Icons from "react-bootstrap-icons";
import { AuthContext } from "../../../utils/useAuth";

const DonationCard = ({
  showDonationForm,
  setShowDonationForm,
  showDonationDetail,
  setShowDonationDetail,
  data,
}) => {
  const handlerButtonClick = () => {
    setShowDonationForm(data);
  };
  const buttonHandlerClickDetail = () => {
    setShowDonationDetail(data);
  };

  return (
    <div
      className="card shadow donationCard"
      onClick={buttonHandlerClickDetail}
    >
      <div class="card-body gap-2 p-4 d-flex flex-column">
        <div>
          <h3 className="text-success fw-bolder">{data.title}</h3>
          <p className="d-inline m-0">
            Menanggapi Laporan
            <span className="badge text-bg-success m-2">Kebakaran</span>
          </p>
        </div>
        <div className="d-flex align-items-center gap-2 justify-content-between ">
          <p className="fs-5 fw-bolder mb-0">Donasi Konservasi </p>
          <p className="fs-6 mb-0">Tersisa 9 jam</p>
        </div>
        <div className="d-flex align-items-center gap-2 justify-content-between">
          <p className="fs-4 fw-bolder">
            Rp {data.donationGoal.toLocaleString()}{" "}
            <span className="text-success fs-6">Terkumpul</span>
          </p>
          <p className="fs-6">Berakhir pada 30/05/2023</p>
        </div>
        <div className="d-flex align-items-center gap-2  justify-content-end">
          <button
            type="button"
            className="btn btn-success gap-2 d-flex align-items-center"
            onClick={handlerButtonClick}
          >
            {" "}
            <Icons.Box />
            Donasi Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
