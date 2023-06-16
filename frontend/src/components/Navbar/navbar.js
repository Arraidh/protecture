import React from "react";
import navbarLogo from "../../images/navbarLogo.png";
import * as Icons from "react-bootstrap-icons";
import { Link } from "react-router-dom";

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
              href="/map"
            >
              Peta
            </a>
            <a
              className="nav-link text-light fs-5 fw-light"
              aria-current="page"
              href="/forum"
            >
              Forum
            </a>

            <a className="nav-link text-light fs-5 fw-light disabled" href="#">
              Tentang Kami
            </a>
          </nav>

          <a href="/register">
            <button className="btn btn-light d-flex align-items-center gap-2">
              <Icons.BoxArrowInRight size={18} />
              <span className="fw-bolder">Daftar</span>
            </button>
          </a>

          <a href="/login">
            <button className="btn  btn-outline-light d-flex align-items-center gap-2">
              {" "}
              <Icons.PersonFill size={18} />
              <span className="fw-bolder">Login</span>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
