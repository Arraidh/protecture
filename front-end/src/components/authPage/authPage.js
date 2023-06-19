import React, { useState } from "react";
import AuthVector from "../../images/Auth.png";
import LoginPage from "./loginPage";
import RegisterPage from "./registerPage";
import { AuthProvider } from "../../utils/useAuth";

const AuthPage = (props) => {
  const [isLogin, setIsLogin] = useState(props.isLogin);

  return (
    <div className="loginPage d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="card p-5 gap-3 d-flex flex-row align-items-center">
          {isLogin ? (
            <AuthProvider>
              <LoginPage authState={isLogin} setAuthState={setIsLogin} />
            </AuthProvider>
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
