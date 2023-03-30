import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

import { storeUsersData } from "../../actions/User.actions";

import RegistrationForm from "./components/registrationForm";

import RegisterStyles from "./Register.module.css";

const Register = () => {
  const usersData = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registrationFail = () => {
    navigate("/login");
    message.warning("Email is already registered !!");
  };
  const registrationSuccess = (values) => {
    dispatch(storeUsersData(values));
    navigate("/login");
    message.success("Registration successfull !!");
  };
  const onFinish = (values) => {
    const existingUser = usersData.find((user) => user.email === values.email);
    if (existingUser) registrationFail();
    else registrationSuccess(values);
  };
  return (
    <div className={RegisterStyles.mainSection}>
      <RegistrationForm onFinish={onFinish} />
    </div>
  );
};
export default Register;
