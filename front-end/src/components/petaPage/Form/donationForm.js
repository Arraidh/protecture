import React from "react";
import * as Icons from "react-bootstrap-icons";

const DonationForm = () => {
  return (
    <div className="donationContainer">
      <button className="btn btn-light text-success d-flex gap-4 p-3">
        <Icons.ArrowLeftCircleFill size={36} />
        <span className="fs-4 text-dark">Kembali</span>
      </button>

      <form className="d-flex flex-column gap-3 mt-3">
        <div className="formHeader">
          <h6>Anda akan menjadi relawan untuk kerusakan</h6>
          <h4>Kebarakan Hutan di Pala Bapak Kau</h4>
        </div>

        <div>
          <label for="NominalDonasi">Metode Pembayaran</label>
          <div className="input-group mb-3 input-group-lg">
            <span className="input-group-text">Rp</span>
            <input
              type="text"
              className="form-control"
              id="NominalDonasi"
              aria-label="Amount (to the nearest dollar)"
            />
            <span class="input-group-text">.00</span>
          </div>
        </div>

        <div>
          <label for="FormMetodePembayaran">Metode Pembayaran</label>
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            id="FormMetodePembayaran"
          >
            <option selected>Dompet Digital</option>
            <option value="1">Kartu Kredit</option>
            <option value="2">Qris</option>
          </select>
        </div>

        <div className="mb-3 input-group-lg">
          <label for="formGroupExampleInput" className="form-label">
            Nama Lengkap
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Nama Lengkap"
          />
        </div>
        <div className="mb-3 input-group-lg">
          <label for="formGroupExampleInput2" className="form-label">
            Nomor HP
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Nomor HP"
          />
        </div>

        <div className="mb-3 input-group-lg">
          <label for="formGroupExampleInput2" className="form-label ">
            Email
          </label>
          <div className="input-group flex-nowrap input-group-lg">
            <span className="input-group-text" id="addon-wrapping">
              @
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>

        <div className="input-group input-group-lg">
          <span className="input-group-text">Pesan</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            placeholder="Tuliskan pesan untuk penerima donasi"
          ></textarea>
        </div>
        <button type="" className="btn btn-success btn-lg">
          Daftar
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
