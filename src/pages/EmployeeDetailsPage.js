// EmployeeDetailsPage.js
import "../styles/EmployeeDetailsPage.scss";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployeeDetails } from "../features/employee/employeeSlice";
import EmployeeInfo from "../components/EmployeeDetails/EmployeeInfo";
import EssentialSkills from "../components/EmployeeDetails/EssentialSkills";
import SkillMatrix from "../components/EmployeeDetails/SkillMatrix";
import Upskill from "../components/EmployeeDetails/Upskill";
import LineManagerDetails from "../components/EmployeeDetails/LineManagerDetails";
import BuddyMappingTable from "../components/EmployeeDetails/BuddyMappingTable";

const EmployeeDetailsPage = () => {
  const dispatch = useDispatch();
  const manager = useSelector((state) => state.employee.userDetails.manager);
  const buddyData = useSelector((state) => state.employee.userDetails.buddies);
  const userDetails = useSelector((state) => state.employee.userDetails);

  useEffect(() => {
    dispatch(fetchEmployeeDetails(userDetails.id));
  }, [dispatch, userDetails.id]);

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
          <LineManagerDetails manager={manager} />
          <BuddyMappingTable data={buddyData} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsPage;
