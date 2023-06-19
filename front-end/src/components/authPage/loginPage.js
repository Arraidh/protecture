import React, { useState, useContext } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../utils/useAuth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login, userData, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();

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

      const user = response.data.user._id;
      // Update the authentication state
      login(user);

      // Store login status and user data in local storage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userData", JSON.stringify(user));
      // Optionally, store the authentication token as well
      localStorage.setItem("authToken", response.data.token);

      // Redirect to home page
      navigate("/");
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
        <label htmlFor="floatingInput">Username</label>
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
        style={{
          backgroundColor: "#3F7D20"
        }}
      >
        Login
      </button>
      <p>
        Belum punya akun?{" "}
        <a href="/register" className="link-success text-decoration-none">
          Yuk daftar sekarang
        </a>
      </p>

      <ToastContainer />
    </div>
  );
};

export default LoginPage;
