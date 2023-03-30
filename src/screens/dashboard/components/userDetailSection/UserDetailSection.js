import React from "react";

import { Content } from "antd/es/layout/layout";
import Layout from "antd/es/layout/layout";
import { Image, Descriptions } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { useSelector } from "react-redux";

import DashboardStyles from "../../Dashboard.module.css";

const UserDetailSection = ({ props }) => {
  const profileImage = useSelector((state) => state.users.profileImage);

  const currentUserData = useSelector((state) => state.users.currentUser);
  return (
    <Layout className={DashboardStyles.userScreen}>
      <Content className={DashboardStyles.mainContent}>
        <div className={DashboardStyles.imageSection}>
          <Image
            className={DashboardStyles.userImage}
            height={200}
            width={200}
            src="error"
            fallback={
              typeof profileImage === "string"
                ? profileImage
                : URL.createObjectURL(profileImage.originFileObj)
            }
            alt="Circle User Icon Blue, HD Png Download@kindpng.com"
          />
          <Upload maxCount={1} {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </div>
        <Descriptions className={DashboardStyles.description} title="User Info">
          <Descriptions.Item label="UserName">{`${currentUserData.email}`}</Descriptions.Item>
          <Descriptions.Item label="Telephone">
            +{`${currentUserData.prefix} ${currentUserData.phone}`}
          </Descriptions.Item>
          <Descriptions.Item label="Gender">{`${currentUserData.gender}`}</Descriptions.Item>
          <Descriptions.Item label="Nickname">
            {`${currentUserData.nickname}`}
          </Descriptions.Item>
        </Descriptions>
      </Content>
    </Layout>
  );
};

export default UserDetailSection;
