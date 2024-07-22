import "./EssentialSkills.scss";

import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { Slider } from "antd";
import { updateSkillRating } from "../../features/employee/employeeSlice";

const EssentialSkills = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.employee.userDetails.skills);

  const handleSliderChange = (skillName, value) => {
    dispatch(updateSkillRating({ skillName, rating: value }));
  };

  return (
    <div className="essential-skills-card-unique">
      <h2>Essential Skills</h2>
      {skills.map((skill) => (
        <div key={skill.name} className="skill-item-unique">
          <span>{skill.name}</span>
          <Slider
            className="skill-slider-unique"
            min={0}
            max={5}
            step={1}
            value={skill.rating}
            onChange={(value) => handleSliderChange(skill.name, value)}
          />
        </div>
      ))}
    </div>
  );
};

export default EssentialSkills;
