import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "antd/es/layout/layout";
import { Header, Footer } from "antd/es/layout/layout";
import { message } from "antd";

import { changeProfilePic } from "../../actions/User.actions";
import UserDetailSection from "./components/userDetailSection";

import DashboardStyles from "./Dashboard.module.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const currentUserData = useSelector((state) => state.users.currentUser);

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      // if (info.file.status !== "uploading") {
      //   console.log(info.file, info.fileList);
      // }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
        // console.log(info.file);
        dispatch(changeProfilePic(info.file));
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Layout className={DashboardStyles.dashboard}>
      <Header className={DashboardStyles.header}>
        Welcome {`${currentUserData.nickname}`}
      </Header>
      <UserDetailSection props={props} />
      <Footer className={DashboardStyles.footer}>footer @2023</Footer>
    </Layout>
  );
};

export default Dashboard;
