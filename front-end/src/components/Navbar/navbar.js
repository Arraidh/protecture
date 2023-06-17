import React, { useContext } from "react";
import navbarLogo from "../../images/navbarLogo.png";
import * as Icons from "react-bootstrap-icons";
import { AuthContext } from "../../utils/useAuth";
import { Dropdown } from "react-bootstrap";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  console.log(isLoggedIn);

  const handleLogout = () => {
    // Call the logout function
    logout();
    // Perform any additional cleanup or redirection as needed
  };

  return (
    <nav className="navbarManual navbar navbar-light bg-success px-5 position-sticky">
      <div className="container-fluid ">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img
            src={navbarLogo}
            alt=""
            className="d-inline-block align-text-top"
          />
          <span className="fs-4 fw-normal text-light">Protecture</span>
        </a>

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

            <a className="nav-link text-light fs-5 fw-light" href="/about">
              Tentang Kami
            </a>
          </nav>

          {!isLoggedIn && (
            <>
              <a href="/register">
                <button className="btn btn-light d-flex align-items-center gap-2">
                  <Icons.BoxArrowInRight size={18} />
                  <span className="fw-bolder">Daftar</span>
                </button>
              </a>

              <a href="/login">
                <button className="btn btn-outline-light d-flex align-items-center gap-2">
                  <Icons.PersonFill size={18} />
                  <span className="fw-bolder">Login</span>
                </button>
              </a>
            </>
          )}

          {isLoggedIn && (
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-light"
                id="dropdown-basic"
                className="d-flex align-items-center gap-2"
              >
                <Icons.PersonFill size={25} />
                <span className="fw-bolder"></span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
