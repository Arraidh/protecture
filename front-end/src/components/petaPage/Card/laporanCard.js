import React from "react";
import * as Icons from "react-bootstrap-icons";

const LaporanCard = ({ showLaporanDetail, setShowLaporanDetail, data }) => {
  const buttonHandlerClick = () => {
    setShowLaporanDetail(data);
  };
  return (
    <div className="card gap-3 shadow laporanCard" onClick={buttonHandlerClick}>
      <img
        src="https://www-cdn.eumetsat.int/files/2021-06/wildfires_smoke_adobe_web.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body gap-2 p-4 d-flex flex-column ">
        <h3
          className="fw-bolder overflow-hidden text-success"
          style={{ height: "2.5rem" }}
        >
          {data.title}
        </h3>

        <div className="d-flex align-items-center gap-2">
          <Icons.GeoAltFill size={24} />{" "}
          <span className="fs-5">
            {data.city}, {data.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LaporanCard;
