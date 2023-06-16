import React, { useState } from "react";
import AuthVector from "../../images/AuthVector-01.png";
import LoginPage from "./loginPage";
import RegisterPage from "./registerPage";

const AuthPage = (props) => {
  const [isLogin, setIsLogin] = useState(props.isLogin);

  console.log(props);

  return (
    <div className="loginPage d-flex align-items-center justify-content-center">
      <div className="container ">
        <div className="card p-5 gap-3 d-flex flex-row align-items-center">
          {isLogin ? (
            <LoginPage authState={isLogin} setAuthState={setIsLogin} />
          ) : (
            <RegisterPage />
          )}
          <img src={AuthVector} alt="" className="w-50 h-50 img-fluid " />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
