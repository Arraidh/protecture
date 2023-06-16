import React from "react";
import * as Icons from "react-bootstrap-icons";

const ForumDetail = () => {
  return (
    <div className="container mt-4">
      <div className="card p-4">
        <div className="card-header fs-5 fw-bolder">
          Kebakaran Hutan di Pala Bapak Kau
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center my-3">
            <div className="d-flex gap-3">
              <img
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
                alt=""
                className="rounded-circle profilePic object-fit-cover"
              />
              <div className="d-flex flex-column gap-1">
                <span className="fs-5 fw-bolder">Gusti Nanda</span>
                <p>2 Menit yang lalu</p>
              </div>
            </div>
            <button className="btn btn-dark py-2 px-5">Admin</button>
          </div>
          <p className="my-4">
            Keterangan: Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries,
          </p>
          <div className="buttonContainer d-flex justify-content-between">
            <div className="d-flex gap-4">
              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  type="button"
                  class="btn btn-success d-flex gap-2 align-items-center"
                >
                  <Icons.CaretUpFill size={20} />
                  69
                </button>
                <button
                  type="button"
                  class="btn btn-dark d-flex gap-2 align-items-center"
                >
                  <Icons.CaretDownFill size={20} />
                  69
                </button>
              </div>
              <button className="btn btn-light shadow-sm">
                {" "}
                <Icons.ChatDots /> Komentar
              </button>
            </div>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                class="btn btn-success d-flex gap-2 align-items-center"
              >
                <Icons.Person />
                Jadi Volunteer
              </button>
              <button
                type="button"
                class="btn btn-primary d-flex gap-2 align-items-center"
              >
                <Icons.Cash />
                Donasi Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumDetail;
