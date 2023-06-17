import React, { useState, useContext } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../utils/useAuth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, userData, login, logout } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8800/api/users/login",
        {
          username: email,
          password: password,
        }
      );

      console.log("Login success:", response.data);
      toast.success("Login successful!");

      const userID = response.data.user._id;
      // Update the authentication state

      login(userID);
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed!");

      // Handle the login error
    }
  };

  return (
    <div className="w-50 d-flex flex-column gap-4  p-5 justify-content-center">
      <div className="card-header fs-3">Log in</div>
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
        onClick={handleLogin}
      >
        Login
      </button>
      <p>
        Belum punya akun?{" "}
        <a href="" className="link-success">
          Yuk daftar sekarang
        </a>
      </p>

      <ToastContainer />
    </div>
  );
};

export default LoginPage;
