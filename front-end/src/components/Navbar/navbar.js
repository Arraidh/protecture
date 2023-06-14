import React from "react";
import navbarLogo from "../../images/navbarLogo.png";
import * as Icons from "react-bootstrap-icons";
import { Icon } from "@material-ui/core";

const Navbar = () => {
  return (
    <nav className="navbarManual navbar navbar-light bg-success p-3 w-100 overflow-hidden position-sticky">
      <div className="container-fluid ">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img
            src={navbarLogo}
            alt=""
            className="d-inline-block align-text-top"
          />
          <span className="fs-4 fw-normal text-light">Protecture</span>
        </a>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
        <div className="d-flex gap-3">
          <nav className="nav">
            <a
              className="nav-link text-light fs-5 fw-light"
              aria-current="page"
              href="#"
            >
              Peta
            </a>
            <a className="nav-link text-light fs-5 fw-light" href="#">
              Forum
            </a>
            <a className="nav-link text-light fs-5 fw-light" href="#">
              Artikel
            </a>
            <a className="nav-link text-light fs-5 fw-light" href="#">
              Tentang Kami
            </a>
          </nav>

          <button className="btn btn-light d-flex align-items-center gap-2">
            <Icons.BoxArrowInRight size={18} />
            <span className="fw-bolder">Daftar</span>
          </button>
          <button className="btn  btn-outline-light d-flex align-items-center gap-2">
            {" "}
            <Icons.PersonFill size={18} />
            <span className="fw-bolder">Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
