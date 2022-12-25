import DialogsCss from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { DialogType } from "../../../types/types";

const DialogItem: React.FC<Propstype> = ({ dialogsData }) => {
  let arrDialog = dialogsData.map((dialog) => {
    return (
      <div key={dialog.id} className={DialogsCss.dialog}>
        <NavLink to={"/Messages/" + dialog.id}>
          <p>{dialog.name}</p>
        </NavLink>
      </div>
    );
  });

  return <div className={DialogsCss.dialogWrapper}>{arrDialog}</div>;
};

export default DialogItem;

type Propstype = {
  dialogsData: Array<DialogType>;
};
