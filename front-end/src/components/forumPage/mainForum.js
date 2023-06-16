import React from "react";
import * as Icons from "react-bootstrap-icons";
import DiskusiCard from "./card/diskusiCard";

const MainForum = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="searchRow d-flex col-3">
          <button
            type="button"
            className="btn btn-lg btn-success d-flex align-items-center gap-2 px-5 py-2 rounded-pill w-100"
          >
            <Icons.Plus size={36} />
            <span className="btn-text-only">Tambah Diskusi</span>
          </button>
        </div>
        <section className="col-9">
          <div class="input-group h-100 ">
            <input
              type="text"
              class="form-control rounded-start-pill "
              id="inlineFormInputGroupUsername"
              placeholder="Cari Topik Diskusi"
            />
            <button
              type="button"
              class="input-group-text btn btn-light rounded-end-pill px-4"
            >
              <Icons.Search />
            </button>
          </div>
        </section>
      </div>
      <div className="row mt-3">
        <div className="col-3">
          <div class="card p-3 shadow-sm">
            <div class="card-body d-flex flex-column align-items-center ">
              <h4 class="card-title">Filter</h4>
              <div className="d-flex align-items-center gap-2">
                <button type="button" className="btn btn-success">
                  Selesai
                </button>
                <button type="button" className="btn btn-secondary">
                  Belum Selesai
                </button>
              </div>
              <form className="mt-2 justify-content-start w-100 ">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Relawan Terbanyak
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Up Vote Terbanyak{" "}
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Down Vote Terbanyak{" "}
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Komentar Terbanyak{" "}
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Donasi Terbanyak{" "}
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-9">
          <div class="card p-3 shadow-sm">
            <div className="card-header fs-3 fw-bolder  ">Forum</div>
            <div className="card-body d-flex flex-column gap-4">
              <DiskusiCard />
              <DiskusiCard />
              <DiskusiCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainForum;
