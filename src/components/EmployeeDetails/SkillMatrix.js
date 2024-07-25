import React from "react";

const SkillMatrix = () => {
  const skillMatrixLink = "/path/to/skill-matrix.xlsx"; // Replace with the actual path to your Excel file

  return (
    <div className="employee-info-card-unique">
      <h2>Skill Matrix</h2>
      <div className="employee-info-container-unique">
        <a href={skillMatrixLink} className="skill-matrix-link-unique" target="_blank" rel="noopener noreferrer">
          Download Skill Matrix Excel Sheet
        </a>
      </div>
    </div>
  );
};

export default SkillMatrix;
