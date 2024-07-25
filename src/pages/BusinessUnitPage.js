import "../styles/BusinessUnitPage.scss";

import KTMode from "../components/BusinessUnit/KTMode";
// src/pages/BusinessUnitPage.js
import React from "react";
import TrainingStatus from "../components/BusinessUnit/TrainingStatus";
import UnitStructure from "../components/BusinessUnit/UnitStructure";

const BusinessUnitPage = () => {
  return (
    <div className="business-unit-page-container">
      <h1 className="page-heading-unique">Business Unit Details</h1>
      <div className="scrollable-content-unique-bu">
        <UnitStructure />
        <KTMode />
        <TrainingStatus />
      </div>
    </div>
  );
};

export default BusinessUnitPage;


