import React from "react";
import * as Icons from "react-bootstrap-icons";

const VolunteerCard = () => {
  return (
    <div className="card gap-3 shadow">
      <img
        src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667"
        className="card-img-top"
        alt="..."
      />
      <div class="card-body gap-2 p-3 d-flex flex-column">
        <div>
          <h3 className="text-success fw-bolder">Kebakaran Hutan</h3>
          <p className="d-inline m-0">
            Menanggapi Laporan
            <span className="badge text-bg-success m-2">Kebakaran</span>
          </p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Icons.People size={24} /> <span>20 Relawan</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Icons.Calendar2Event size={24} /> <span>26 Mei 2023</span>
        </div>
        <div className="d-flex align-items-center gap-2  justify-content-between">
          <div>
            <Icons.GeoAlt size={24} /> <span>Denpasar Bali</span>
          </div>
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

export default VolunteerCard;
