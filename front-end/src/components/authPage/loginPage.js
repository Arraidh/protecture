import React from "react";

const LoginPage = (props) => {
  return (
    <div className="w-50 d-flex flex-column gap-4  p-5 justify-content-center ">
      <div className="card-header fs-3 ">Log in </div>
      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button type="button" className="btn btn-success btn-lg">
        Login
      </button>
      <p>
        Belum punya akun?{" "}
        <a href="" className="link-success">
          Yuk daftar sekarang
        </a>
      </p>
    </div>
  );
};

export default LoginPage;
