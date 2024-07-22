import "./ManagerActions.scss";

import { useDispatch, useSelector } from "react-redux";

import { Card } from "antd";
import React from "react";
import { setSelectedAction } from "../../features/contribution/managerSlice";

const ManagerActions = () => {
  const actionsNeeded = useSelector((state) => state.manager.actionsNeeded);
  const dispatch = useDispatch();

  const handleClick = (action) => {
    dispatch(setSelectedAction(action));
  };

  return (
    <Card
      title="Actions Needed (Managers Only)"
      className="manager-actions-card"
    >
      {actionsNeeded.length > 0 ? (
        actionsNeeded.map((action) => (
          <div
            key={action.id}
            className="action-item"
            onClick={() => handleClick(action)}
          >
            <p>
              <strong>Title:</strong> {action.title}
            </p>
            <p>
              <strong>Description:</strong> {action.description}
            </p>
            <p>
              <strong>Uploaded by:</strong> {action.uploadedBy}
            </p>
          </div>
        ))
      ) : (
        <p>No actions needed</p>
      )}
    </Card>
  );
};

export default ManagerActions;
