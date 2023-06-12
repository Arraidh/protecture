import React from "react";
import * as Icons from "react-bootstrap-icons";

const LaporanCard = () => {
  return (
    <div className="card gap-3 shadow">
      <img
        src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body gap-2 p-4 d-flex flex-column ">
        <h3
          className="fw-bolder overflow-hidden text-success"
          style={{ height: "2.5rem" }}
        >
          Kebakaran Hutan di Pala Bapak Kau asdasdadasd
        </h3>

        <div className="d-flex align-items-center gap-2">
          <Icons.GeoAltFill size={24} />{" "}
          <span className="fs-5">Sukolilo, Keputih, Surabaya</span>
        </div>
      </div>
    </div>
  );
};

export default LaporanCard;