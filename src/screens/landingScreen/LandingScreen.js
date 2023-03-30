import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

import LandingStyles from "./LandingScreen.module.css";

const LandingScreen = () => {
  const navigate = useNavigate();
  return (
    <div className={LandingStyles.landing_container}>
      <h1>Welcome to the app !!</h1>
      <div className={LandingStyles.reg_login_buttons}>
        <Button
          className={LandingStyles.reg_button}
          onClick={() => navigate("/register")}
          type="primary"
        >
          Register
        </Button>
        <Button
          className={LandingStyles.login_button}
          onClick={() => navigate("/login")}
          type="primary"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LandingScreen;
