import ProfileInfoCss from "./ProfileInfo.module.css";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ProfileStatuswithHooks = ({ status, updateStatus }) => {
  let [editMode, setEditMode] = useState(false);
  let [statusState, setStatusState] = useState(status);

  useEffect(() => {
    setStatusState(status);
  }, [status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(statusState);
  };
  const onStatusChange = (e) => {
    setStatusState(e.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{status || "------"}</span>
        </div>
      )}

      {editMode && (
        <div>
          {" "}
          <input
            autoFocus
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={statusState}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatuswithHooks;
