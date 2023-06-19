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
        </div>
        <div className="col-lg-1">
          <div className="row d-flex">
            <p className="fw-bold">Links</p>
            <p>
              <a
                href="/map"
                style={{ color: "white", textDecoration: "none" }}
              >
                Map
              </a>
            </p>
            <p>
              <a
                href="/about"
                style={{ color: "white", textDecoration: "none" }}
              >
                About Us
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="row d-flex">
            <p className="fw-bold">Programs</p>
            <p>
              <a
                href="/map"
                style={{ color: "white", textDecoration: "none" }}
              >
                Open Volunteer
              </a>
            </p>
            <p>
              <a
                href="/map"
                style={{ color: "white", textDecoration: "none" }}
              >
                Open Donasi
              </a>
            </p>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <p className="fw-bold">Address</p>
            <p className="justify-content-center">Batik Kumeli St No. 50, Sukaluyu, Kecamatan Cibeunying Kaler, Kota Bandung, Jawa Barat 40123</p>
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
