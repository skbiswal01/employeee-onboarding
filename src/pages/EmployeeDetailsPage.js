import "../styles/EmployeeDetailsPage.scss";

import EmployeeInfo from "../components/EmployeeDetails/EmployeeInfo";
import EssentialSkills from "../components/EmployeeDetails/EssentialSkills";
import HierarchyDiagram from "../components/EmployeeDetails/HierarchyDiagram";
import SkillMatrix from "../components/EmployeeDetails/SkillMatrix";
import React from "react";
import Upskill from "../components/EmployeeDetails/Upskill";

const EmployeeDetailsPage = () => {
  return (
    <div className="employee-details-page-container">
      <h1 className="page-heading-unique">Employee Details</h1>
      <div className="scrollable-content-unique">
        <div className="left-panel-container-unique">
          <EmployeeInfo />
          <EssentialSkills />
          <SkillMatrix />
          <Upskill />
        </div>
        <div className="right-panel-container-unique">
          {/* <HierarchyDiagram /> */}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsPage;


