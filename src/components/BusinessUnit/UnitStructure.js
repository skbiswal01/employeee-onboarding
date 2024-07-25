// src/components/BusinessUnit/UnitStructure.js
import React, { useEffect, useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";

import { useSelector } from "react-redux";

const UnitStructure = () => {
  const unitStructure = useSelector(
    (state) => state.businessUnit.unitStructure
  );
  const currentUser = useSelector((state) => state.employee.userDetails);

  const [expandedKeys, setExpandedKeys] = useState(new Set());

  useEffect(() => {
    const expandToCurrentUser = (nodes, path = []) => {
      for (let node of nodes) {
        if (node.name === currentUser.name) {
          path.forEach((key) =>
            setExpandedKeys((prev) => new Set(prev).add(key))
          );
          break;
        }
        if (node.children) {
          expandToCurrentUser(node.children, [...path, node.id]);
        }
      }
    };
    expandToCurrentUser(unitStructure);
  }, [currentUser, unitStructure]);

  const handleNodeClick = (key) => {
    const newExpandedKeys = new Set(expandedKeys);
    if (newExpandedKeys.has(key)) {
      newExpandedKeys.delete(key);
    } else {
      newExpandedKeys.add(key);
    }
    setExpandedKeys(newExpandedKeys);
  };

  const renderTreeNodes = (data) =>
    data.map((item) => (
      <TreeNode
        key={item.id}
        label={
          <div
            className={`node-box ${
              item.name === currentUser.name ? "active-node" : ""
            }`}
            onClick={() => handleNodeClick(item.id)}
          >
            {item.name} ({item.role})
          </div>
        }
      >
        {item.children &&
          expandedKeys.has(item.id) &&
          renderTreeNodes(item.children)}
      </TreeNode>
    ));

  return (
    <div className="glass-card-unique-bu">
      <h2>Unit Structure</h2>
      <Tree
        lineWidth={"2px"}
        lineColor={"green"}
        lineBorderRadius={"10px"}
        label={
          <div className="node-box">
            {unitStructure[0].name} ({unitStructure[0].role})
          </div>
        }
      >
        {renderTreeNodes(unitStructure[0].children)}
      </Tree>
    </div>
  );
};

export default UnitStructure;


