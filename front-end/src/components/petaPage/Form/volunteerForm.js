import React from "react";
import * as Icons from "react-bootstrap-icons";

const VolunteerForm = () => {
  return (
    <div className="volunteerContainer">
      <button className="btn btn-light text-success d-flex gap-4 p-3">
        <Icons.ArrowLeftCircleFill size={36} />
        <span className="fs-4 text-dark">Kembali</span>
      </button>

      <form className="d-flex flex-column gap-3 mt-3">
        <div className="formHeader">
          <h6>Anda akan menjadi relawan untuk kerusakan</h6>
          <h4>Kebarakan Hutan di Pala Bapak Kau</h4>
        </div>
        <div class="form-floating  mb-3">
          <input
            type="text"
            className="form-control form-control-lg"
            id="floatingNameInput"
            placeholder="Mega-Chan"
          />
          <label for="floatingInput">Nama Lengkap</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="number"
            class="form-control"
            id="floatingNomorHP"
            placeholder="Nomor HP"
          />
          <label for="floatingPassword">Nomor HP</label>
        </div>
        <button type="" className="btn btn-success btn-lg">
          Daftar
        </button>
      </form>
    </div>
  );
};

export default VolunteerForm;
