import "./HierarchyDiagram.scss";

import { Tree, TreeNode } from "react-organizational-chart";

import React from "react";
import { useSelector } from "react-redux";

const HierarchyDiagram = () => {
  const { hierarchy } = useSelector((state) => state.employee);

  const renderTreeNodes = (node) => (
    <TreeNode label={<div>{node.name}</div>}>
      {node.children && node.children.map((child) => renderTreeNodes(child))}
    </TreeNode>
  );

  return (
    <div className="hierarchy-diagram-card-unique">
      <h2>Hierarchy Diagram</h2>
      <Tree
        lineWidth={"2px"}
        lineColor={"green"}
        lineBorderRadius={"10px"}
        label={<div>{hierarchy.name}</div>}
      >
        {hierarchy.children &&
          hierarchy.children.map((child) => renderTreeNodes(child))}
      </Tree>
    </div>
  );
};

export default HierarchyDiagram;




