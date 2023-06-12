import React from "react";
import "../App.css";
import * as Icons from "react-bootstrap-icons";
import { Button } from "bootstrap";

const DonationCard = () => {
  return (
    <div className="card gap-3 shadow">
      <div class="card-body gap-2 p-3 d-flex flex-column">
        <div>
          <h3>Kebakaran Hutan</h3>
          <p className="d-inline m-0">
            Menanggapi Laporan
            <span className="badge text-bg-success m-2">Kebakaran</span>
          </p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <h6>Donasi Konservasi</h6> <span>Tersisa 9 jam</span>
        </div>
        <div className="d-flex align-items-center gap-2"></div>
        <div className="d-flex align-items-center gap-2  justify-content-between">
          <button
            type="button"
            class="btn btn-success gap-2 d-flex align-items-center"
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

export default DonationCard;
