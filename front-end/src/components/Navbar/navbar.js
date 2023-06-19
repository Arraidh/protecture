import React, { useContext } from "react";
import navbarLogo from "../../images/navbarLogo.png";
import * as Icons from "react-bootstrap-icons";
import { AuthContext } from "../../utils/useAuth";
import { Dropdown } from "react-bootstrap";

const Navbar = () => {
  const { isLoggedIn, logout, userData } = useContext(AuthContext);
  console.log("Login:", !isLoggedIn);

  const handleLogout = () => {
    // Call the logout function
    logout();
    // Perform any additional cleanup or redirection as needed
  };

  console.log("User ID:", userData);

  return (
    <nav className="navbarManual navbar navbar-light px-5">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center gap-2" href="home">
          <img
            src={navbarLogo}
            alt=""
            className="d-inline-block align-text-top"
          />
          <span className="fs-4 fw-normal text-light">Protecture</span>
        </a>

        <div className="d-flex flex-grow-1 justify-content-center">
          <nav className="nav">
            <a
              className="nav-link text-light fw-medium fs-5"
              aria-current="page"
              href="/home"
            >
              Home
            </a>
            <a
              className="nav-link text-light fw-medium fs-5"
              aria-current="page"
              href="/map"
            >
              Peta
            </a>
            <a className="nav-link text-light fw-medium fs-5" href="/about">
              Tentang Kami
            </a>
          </nav>
        </div>

        <div className="ml-auto">
          {!isLoggedIn && (
            <a className="text-light fw-medium fs-5 mt-2" href="/login">
              <Icons.PersonCircle size={20} /> | Login
            </a>
          )}

          {isLoggedIn && (
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-light"
                id="dropdown-basic"
                className="d-flex align-items-center gap-2"
              >
                <Icons.PersonFill size={20} />
                Account
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
