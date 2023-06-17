import React from "react";
import * as Icons from "react-bootstrap-icons";

const VolunteerDetail = ({ showVolunteerDetail, setShowVolunteerDetail, showVolunteerForm, setShowVolunteerForm }) => {
  const buttonHandlerClickDetail = () => {
    setShowVolunteerDetail(false);
  };
  const buttonHandlerClick = () => {
    setShowVolunteerForm(true);
  };
    return (
    <div className="volunteerContainer">
    <button className="btn btn-light text-success d-flex gap-4 p-3" onClick={buttonHandlerClickDetail}>
        <Icons.ArrowLeftCircleFill size={36} />
        <span className="fs-4 text-dark">Kembali</span>
      </button>
      <div className="d-flex flex-column gap-1 mt-3">
        <div className="reportHeader mb-1 mt-4">
            <h3>Pendaftaran Suka Relawan</h3>
        </div>
        <div>
          <p className="d-inline m-0">
            Menanggapi Laporan
            <span className="badge text-bg-success m-2">Kebakaran</span>
          </p>
        </div>
        <div className="d-flex flex-row profileReport">
            <div>
                <Icons.PersonCircle 
                    size={48}
                />
            </div>
            <div className="d-flex flex-column ms-4">
                <div className="reportReporter">
                    John Doe
                </div>
                <div className="reportTimestamp">
                    7 hours Ago
                </div>
            </div>
            <div className="ms-auto reportReporterRole">
                <button type="button" class="btn btn-secondary" disabled>Admin</button>
            </div>
        </div>
        <div className="d-flex align-items-center gap-2 mt-2 mb-2">
          <Icons.People size={24} /> <span>20 Relawan</span>
        </div>
        <div className="d-flex align-items-center gap-2 mb-2">
          <Icons.Calendar2Event size={24} /> <span>26 Mei 2023</span>
        </div>
        <div className="d-flex align-items-center gap-2 justify-content-between">
          <div>
            <Icons.GeoAlt size={24} /> <span>Denpasar Bali</span>
          </div>
        </div>
        
        <div className="mt-4 me-3 reportDesc">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tellus nulla, cursus sit amet vehicula posuere, placerat sed lectus. Phasellus efficitur, urna a tristique posuere, tellus tellus viverra nisi, ac vulputate metus ante sit amet risus.</p>
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
