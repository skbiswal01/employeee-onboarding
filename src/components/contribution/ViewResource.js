import { Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const ViewResources = () => {
  const resources = useSelector((state) => state.contribution.resources);

  return (
    <Card title="Your Documents" className="view-card">
      {resources.length > 0 ? (
        resources.map((resource) => (
          <div key={resource.id}>
            <p>{resource.title}</p>
            <p>{resource.description}</p>
            <a href={resource.file} download>
              Download
            </a>
          </div>
        ))
      ) : (
        <p>No documents available</p>
      )}
    </Card>
  );
};

export default ViewResources;
