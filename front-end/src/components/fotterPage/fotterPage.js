import React from "react";
import logo from "../../images/navbarLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#3F7D20", color: "#ffffff", padding: "20px" }}
    >
      <div className="ms-5 p-3 row">
        <div className="col-lg-7">
          <div className="row">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{ height: "30px", marginRight: "10px" }}
              />
              <span style={{ fontSize: "20px" }}>
                Protecture
              </span>
            </div>
          </div>
          <div className="d-flex mt-5 gap-3">
            <a href="#" className="me-2">
              <FontAwesomeIcon icon={faFacebook} className="fs-3 text-white" />
            </a>
            <a href="#" className="me-2">
              <FontAwesomeIcon icon={faTwitter} className="fs-3 text-white" />
            </a>
            <a href="#" className="me-2">
              <FontAwesomeIcon icon={faInstagram} className="fs-3 text-white" />
            </a>
            <a href="#" className="me-2">
              <FontAwesomeIcon icon={faLinkedin} className="fs-3 text-white" />
            </a>
          </div>
        </div>
        <div className="col-sm">
          <div className="row">
            <p className="fw-bold">Link</p>
            <p>Berita</p>
            <p>Event</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="row d-flex ">
            <p className="fw-bold">Programs</p>
            <p>
              <a
                href="/open-volunteer"
                style={{ color: "white", textDecoration: "none" }}
              >
                Open Volunteer
              </a>
            </p>
            <p>
              <a
                href="/open-donasi"
                style={{ color: "white", textDecoration: "none" }}
              >
                Open Donasi
              </a>
            </p>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <p className="fw-bold">Alamat</p>
            <p>Jl Cihampelas 178, Jawa Barat,</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        © 2023 Protecture | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
