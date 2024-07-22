import { Button, Modal } from "antd";
import {
  approveResource,
  clearSelectedAction,
  rejectResource,
} from "../../features/contribution/managerSlice";
import { useDispatch, useSelector } from "react-redux";

import React from "react";

const ActionModal = () => {
  const dispatch = useDispatch();
  const selectedAction = useSelector((state) => state.manager.selectedAction);

  const handleApprove = () => {
    dispatch(approveResource(selectedAction.id));
    dispatch(clearSelectedAction());
  };

  const handleReject = () => {
    dispatch(rejectResource(selectedAction.id));
    dispatch(clearSelectedAction());
  };

  const handleClose = () => {
    dispatch(clearSelectedAction());
  };

  return (
    <Modal
      visible={!!selectedAction}
      onCancel={handleClose}
      footer={[
        <Button key="reject" type="danger" onClick={handleReject}>
          Reject
        </Button>,
        <Button key="approve" type="primary" onClick={handleApprove}>
          Approve
        </Button>,
      ]}
    >
      {selectedAction && (
        <>
          <p>
            <strong>Title:</strong> {selectedAction.title}
          </p>
          <p>
            <strong>Description:</strong> {selectedAction.description}
          </p>
          <p>
            <strong>Uploaded by:</strong> {selectedAction.uploadedBy}
          </p>
        </>
      )}
    </Modal>
  );
};

export default ActionModal;
