import React from "react";
import * as Icons from "react-bootstrap-icons";

const LaporanUpdateForm = ({ showLaporanDetail, setShowLaporanDetail, showLaporanUpdateForm, setShowLaporanUpdateForm }) => {
  const handlerButtonClick = () => {
    setShowLaporanDetail(true);
    setShowLaporanUpdateForm(false);
  };
  return (
    <div className="laporanUpdateContainer">
      <button
        className="btn btn-light text-success d-flex gap-4 p-3"
        onClick={handlerButtonClick}
      >
        <Icons.ArrowLeftCircleFill size={36} />
        <span className="fs-4 text-dark">Kembali</span>
      </button>

      <form className="d-flex flex-column gap-3 mt-3">
        <div className="mb-3 input-group-lg">
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
        <div className="mb-3 input-group-lg row">
          <label for="formGroupExampleInput" className="form-label">
            Koordinat
          </label>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Longitude"
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Latitude"
            />
          </div>
        </div>
        <div className="input-group-lg">
          <label for="KategoriKerusakan">Kategori</label>
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            id="KategoriKerusakan"
          >
            <option selected>Sampah</option>
            <option value="1">Air</option>
            <option value="2">Deforestasi</option>
            <option value="3">Habitat</option>
          </select>
        </div>
        <div className="mb-3">
          <label for="formFileLg" className="form-label">Media</label>
          <input className="form-control form-control-lg" type="file" id="formFileLg" />
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

export default LaporanUpdateForm;