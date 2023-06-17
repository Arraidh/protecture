import React from "react";
import * as Icons from "react-bootstrap-icons";

const LaporanDetail = ({ showLaporanDetail, setShowLaporanDetail }) => {
  const buttonHandlerClick = () => {
    setShowLaporanDetail(false);
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
        <div className="reportHeader mb-3 mt-4">
            <h3>Kebarakan Hutan di Pala Bapak</h3>
        </div>
        <div id="carouselExampleControls" class="carousel slide mb-4" data-mdb-ride="carousel">
            <div class="carousel-inner rounded-3 shadow-4-strong">
                <div class="carousel-item active">
                <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="d-block w-100" alt="Wild Landscape"/>
                </div>
                <div class="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="d-block w-100" alt="Camera"/>
                </div>
                <div class="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="d-block w-100" alt="Exotic Fruits"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
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
        <div className="mt-4 me-3 reportDesc">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tellus nulla, cursus sit amet vehicula posuere, placerat sed lectus. Phasellus efficitur, urna a tristique posuere, tellus tellus viverra nisi, ac vulputate metus ante sit amet risus.</p>
        </div>
        
        <div className="mt-4 reportCoordinates">
            <h4 class="text-center">Koordinat</h4>
            <h6 class="text-center p-2">41°24'12.2"N 2°10'26.5"E</h6>
        </div>
      </div>
    </div>
  );
};

export default LaporanDetail;
