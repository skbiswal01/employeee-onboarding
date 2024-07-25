// BuddyMappingTable.js
import React from "react";
import { Card, Table, Modal } from "antd";
import "./BuddyMappingTable.scss"; // Ensure to import the CSS file

const BuddyMappingTable = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [modalData, setModalData] = React.useState(null);

  if (!data) {
    return null;
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <a
          onClick={() => {
            setModalData(record);
            setIsModalVisible(true);
          }}
        >
          View Details
        </a>
      ),
    },
  ];

  return (
    <Card
      className="buddy-mapping-card-unique"
      title={<span className="buddy-mapping-title-unique">Buddy Mapping</span>}
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowClassName={(record) => (record.isBuddy ? "highlight-row" : "")}
      />
      <Modal
        title="Buddy Details"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        {modalData && (
          <div>
            <p>Name: {modalData.name}</p>
            <p>Role: {modalData.role}</p>
            <p>Email: {modalData.email}</p>
            <p>Phone: {modalData.phone}</p>
          </div>
        )}
      </Modal>
    </Card>
  );
};

export default BuddyMappingTable;
