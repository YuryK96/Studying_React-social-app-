import ProfileInfoCss from "./ProfileInfo.module.css";
import { ChangeEvent, useState } from "react";
import { useEffect } from "react";

const ProfileStatuswithHooks: React.FC<ProfileStatuswithHooksType> = ({
  status,
  updateStatus,
}) => {
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
  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatusState(event.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span role="span" onDoubleClick={activateEditMode}>
            {status || "------"}
          </span>
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

type ProfileStatuswithHooksType = {
  status: string;
  updateStatus: (status: string) => void;
};
