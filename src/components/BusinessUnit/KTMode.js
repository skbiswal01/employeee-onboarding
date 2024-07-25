// // src/components/BusinessUnit/KTMode.js
// import React from "react";
// import { Table } from "antd";
// import { useSelector } from "react-redux";

// const KTMode = () => {
//   const ktModes = useSelector((state) => state.businessUnit.ktModes);

//   const columns = [
//     {
//       title: "KT Mode",
//       dataIndex: "mode",
//       key: "mode",
//     },
//     {
//       title: "Link",
//       dataIndex: "link",
//       key: "link",
//       render: (text) => (
//         <a href={text} target="_blank" rel="noopener noreferrer">
//           {text}
//         </a>
//       ),
//     },
//     {
//       title: "Point of Contact",
//       dataIndex: "poc",
//       key: "poc",
//     },
//   ];

//   return (
//     <div className="glass-card-unique-bu">
//       <h2>KT Mode</h2>
//       <Table dataSource={ktModes} columns={columns} pagination={false} />
//     </div>
//   );
// };

// export default KTMode;


import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";

const KTMode = () => {
  const ktModes = useSelector((state) => state.businessUnit.ktModes);

  const columns = [
    {
      title: "Module Name",
      dataIndex: "moduleName",
      key: "moduleName",
    },
    {
      title: "Mode",
      dataIndex: "mode",
      key: "mode",
    },
    {
      title: "Trainer",
      dataIndex: "trainer",
      key: "trainer",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Supporting Material",
      dataIndex: "supportingMaterial",
      key: "supportingMaterial",
      render: (text) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ),
    },
  ];

  return (
    <div className="glass-card-unique-bu">
      <h2>KT Mode</h2>
      <Table dataSource={ktModes} columns={columns} pagination={false} />
    </div>
  );
};

export default KTMode;