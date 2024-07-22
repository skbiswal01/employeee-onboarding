import "./EmployeeInfo.scss";

import { Avatar, Button, Card, Upload } from "antd";
import React, { useState } from "react";

import { UploadOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const EmployeeInfo = () => {
  const userDetails = useSelector((state) => state.employee.userDetails);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (info) => {
    if (info.file.status === "done") {
      setSelectedImage(URL.createObjectURL(info.file.originFileObj));
    }
  };

  return (
    <Card className="employee-info-card-unique" title="Employee Details">
      <div className="employee-photo-container-unique">
        <Avatar
          src={selectedImage || "default-avatar.png"} // Add a default avatar image if no image is selected
          size={100}
        />
        <Upload onChange={handleImageChange} showUploadList={false}>
          <Button className="upload-button-unique" icon={<UploadOutlined />}>
            Upload Photo
          </Button>
        </Upload>
      </div>
      <p>
        <strong>Name:</strong> {userDetails.name}
      </p>
      <p>
        <strong>Email:</strong> {userDetails.email}
      </p>
      <p>
        <strong>Role:</strong> {userDetails.role}
      </p>
    </Card>
  );
};

export default EmployeeInfo;
