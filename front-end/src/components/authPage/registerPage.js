import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const userData = {
      username: userName,
      city: city,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8800/api/users/register",
        userData
      );

      // Clear the form
      setUserName("");
      setCity("");
      setEmail("");
      setPassword("");

      console.log("Registration success:", response.data);
      toast.success("Registration successful!");

    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed!");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="w-50 d-flex flex-column gap-4 p-5 justify-content-center">
      <div className="card-header fs-3">Daftar Akun</div>

      <div className="row g-2">
        <div className="col-md">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="UserNameRegister"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="floatingInputGrid">Username</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="CityRegister"
              placeholder="Kota Domisili"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label htmlFor="floatingInputGrid">Kota Domisili</label>
          </div>
        </div>
      </div>

      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button
        type="button"
        className="btn btn-success btn-lg"
        onClick={handleRegister}
        style={{
          backgroundColor: "#3F7D20"
        }}
      >
        Daftar
      </button>
      <p>
        Sudah punya akun?{" "}
        <a href="/login" className="link-success text-decoration-none">
          Login disini
        </a>
      </p>

      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
