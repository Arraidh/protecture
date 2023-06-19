import React, { useState } from "react";
import * as Icons from "react-bootstrap-icons";
import axios from "axios";

const DonationForm = ({
  showDonationForm,
  setShowDonationForm,
  showDonationDetail,
  setShowDonationDetail,
  donationValidate,
  setDonationValidate,
}) => {
  const [donationToken, setDonationToken] = useState("");
  const [donationId, setDonationId] = useState("");
  const [fullName, setFullName] = useState("");
  const [donationAmount, setDonationAmount] = useState("");

  const handleButtonClick = () => {
    setShowDonationForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateDonation();
  };

  const validateDonation = () => {
    setShowDonationForm(null);
    setDonationValidate({
      ...showDonationForm,
      fullName,
      donationAmount,
    });
  };

  return (
    <div className="donationContainer">
      <button
        className="btn btn-light text-success d-flex gap-4 p-3"
        onClick={handleButtonClick}
      >
        <Icons.ArrowLeftCircleFill size={36} />
        <span className="fs-4 text-dark">Kembali</span>
      </button>

      <form className="d-flex flex-column gap-3 mt-3" onSubmit={handleSubmit}>
        <div className="formHeader">
          <h6>Anda akan menjadi relawan untuk kerusakan</h6>
          <h4>Kebarakan Hutan di Pala Bapak Kau</h4>
        </div>

        <div className="mb-3 input-group-lg">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Nama Lengkap
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Nama Lengkap"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="NominalDonasi">Metode Pembayaran</label>
          <div className="input-group mb-3 input-group-lg">
            <span className="input-group-text">Rp</span>
            <input
              type="number"
              className="form-control"
              id="NominalDonasi"
              aria-label="Amount (to the nearest dollar)"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
            />
            <span className="input-group-text">.00</span>
          </div>
        </div>

        <button type="submit" className="btn btn-success btn-lg">
          Berikan Donasi
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
