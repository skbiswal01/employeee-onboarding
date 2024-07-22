// src/components/BusinessUnit/TrainingStatus.js
import React from "react";
import { useSelector } from "react-redux";

const TrainingStatus = () => {
  const trainingStatusLink = useSelector(
    (state) => state.businessUnit.trainingStatusLink
  );

  return (
    <div className="glass-card-unique-bu">
      <h2>Training Status</h2>
      <a href={trainingStatusLink} target="_blank" rel="noopener noreferrer">
        View mandatory training status here
      </a>
    </div>
  );
};

export default TrainingStatus;
