import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentLoggedInUser } from "../../actions/User.actions";
import { message } from "antd";

import LoginForm from "./components/loginForm/LoginForm";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usersData = useSelector((state) => state.users.users);
  const currentUser = useSelector((state) => state.users.currentUser);
  useEffect(() => {
    currentUser && navigate("/dashboard");
  }, [currentUser, navigate]);
  const loginSuccessfull = (existingUser) => {
    dispatch(currentLoggedInUser(existingUser));
    navigate("/dashboard");
    message.success("Login successful!!");
  };
  const loginFail = (msg) => {
    message.error(msg);
  };
  const onFinish = (values) => {
    const existingUser = usersData.find(
      (user) => user.email === values.username
    );
    if (existingUser) {
      existingUser.password === values.password
        ? loginSuccessfull(existingUser)
        : loginFail("Email/Password incorrect !!");
    } else loginFail("You need to Register first !!");
  };
  return <LoginForm onFinish={onFinish} />;
};
export default Login;
