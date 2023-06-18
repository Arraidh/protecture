import React from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as Icons from "react-bootstrap-icons";

const DonationUpdateForm = ({ showDonationDetail, setShowDonationDetail, showDonationUpdateForm, setShowDonationUpdateForm }) => {
    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    const handlerButtonClick = () => {
    setShowDonationDetail(true);
    setShowDonationUpdateForm(false);
  };
  return (
    <div className="donationUpdateContainer">
      <button
        className="btn btn-light text-success d-flex gap-4 p-3"
        onClick={handlerButtonClick}
      >
        <Icons.ArrowLeftCircleFill size={36} />
        <span className="fs-4 text-dark">Kembali</span>
      </button>

      <form className="d-flex flex-column gap-3 mt-3">
        <div className="mb-3 input-group-md">
          <label for="formGroupExampleInput" className="form-label">
            Judul
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Judul Laporan"
          />
        </div>
        <div className="d-flex flex-row justify-content-between">
        <div className="mb-3 input-group-lg">
          <div>
            <label htmlFor="datepicker" className="form-label">
              Tanggal Start
            </label>
          </div>
          <DatePicker
            id="datepicker"
            selected={selectedDate}
            onChange={handleDateChange}
            className="form-control"
            placeholderText="Pilih Tanggal Mulai"
          />
        </div>
        <div className="mb-3 input-group-lg">
          <div>
            <label htmlFor="datepicker" className="form-label">
              Tanggal End
            </label>
          </div>
          <DatePicker
            id="datepicker"
            selected={selectedDate}
            onChange={handleDateChange}
            className="form-control"
            placeholderText="Pilih Tanggal Berakhir"
          />
        </div>
        </div>
        <div>
          <label for="NominalDonasi">Nominal</label>
          <div className="input-group mb-3 input-group-lg">
            <span className="input-group-text">Rp</span>
            <input
              type="number"
              className="form-control"
              id="NominalDonasi"
              aria-label="Amount (to the nearest dollar)"
            />
            <span class="input-group-text">.00</span>
          </div>
        </div>
        <div class="form-floating">
          <textarea 
            class="form-control" 
            placeholder="Leave a comment here" 
            id="floatingTextarea2" 
            style={{height: "200px"}}>
          </textarea>
          <label for="floatingTextarea2">Deskripsi</label>
        </div>
        <div className="d-flex flex-row gap-2 justify-content-between">
         <button type="" className="btn btn-danger align-items-center btn-lg d-flex gap-2">
            <Icons.Trash2 size={25} />
            Hapus Laporan Ini
          </button>
          <button type="" className="btn btn-primary align-items-center btn-lg d-flex gap-2">
            <Icons.ArrowClockwise size={25} />
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationUpdateForm;