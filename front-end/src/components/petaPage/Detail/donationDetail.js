import React from "react";
import * as Icons from "react-bootstrap-icons";

const DonationDetail = ({ showDonationDetail, setShowDonationDetail, showDonationForm, setShowDonationForm }) => {
  const buttonHandlerClickDetail = () => {
    setShowDonationDetail(false);
  };
  const buttonHandlerClick = () => {
    setShowDonationForm(true);
  };
    return (
    <div className="donationContainer">
    <button className="btn btn-light text-success d-flex gap-4 p-3" onClick={buttonHandlerClickDetail}>
        <Icons.ArrowLeftCircleFill size={36} />
        <span className="fs-4 text-dark">Kembali</span>
      </button>
      <div className="d-flex flex-column gap-1 mt-3">
        <div className="reportHeader mb-1 mt-4">
            <h3>Penggalangan Dana Protecture Solid</h3>
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
        <div className="mt-4 me-3 reportDesc">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tellus nulla, cursus sit amet vehicula posuere, placerat sed lectus. Phasellus efficitur, urna a tristique posuere, tellus tellus viverra nisi, ac vulputate metus ante sit amet risus.</p>
        </div>
        <div className="d-flex align-items-center gap-2 justify-content-between ">
          <p className="fs-5 fw-bolder mb-0">Donasi Konservasi </p>
          <p className="fs-6 mb-0">Tersisa 9 jam</p>
        </div>
        <div className="d-flex align-items-center gap-2 justify-content-between">
          <p className="fs-4 fw-bolder">
            Rp 2.000.000 <span className="text-success fs-6">Terkumpul</span>
          </p>
          <p className="fs-6">Berakhir pada 30/05/2023</p>
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
