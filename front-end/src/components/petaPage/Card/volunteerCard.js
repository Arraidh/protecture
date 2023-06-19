import React from "react";
import * as Icons from "react-bootstrap-icons";

const VolunteerCard = ({
  showVolunteerForm,
  setShowVolunteerForm,
  showVolunteerDetail,
  setShowVolunteerDetail,
  data,
}) => {
  const buttonHandlerClick = () => {
    setShowVolunteerForm(data);
  };
  const buttonHandlerClickDetail = () => {
    setShowVolunteerDetail(data);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div
      className="card gap-3 shadow volunteerCard"
      onClick={buttonHandlerClickDetail}
    >
      <div className="card-body gap-2 p-3 d-flex flex-column">
        <div>
          <h3 className="text-success fw-bolder">{data.title}</h3>
          <p className="d-inline m-0">
            Menanggapi Laporan
            <span className="badge text-bg-success m-2">Kebakaran</span>
          </p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Icons.People size={24} />{" "}
          <span>{data.volunteers.length} Relawan</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Icons.Calendar2Event size={24} />{" "}
          <span>{formatDate(data.timestamp)}</span>
        </div>
        <div className="d-flex align-items-center gap-2  justify-content-between">
          <div>
            <Icons.GeoAlt size={24} />{" "}
            <span>
              {data.city}, {data.country}
            </span>
          </div>
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

export default VolunteerCard;
