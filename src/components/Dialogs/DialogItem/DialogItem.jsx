import DialogsCss from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';


  
const DialogItem = (props) => {
 
let arrDialog = props.dialogsData.map(dialog => {
    return ( <div className={DialogsCss.dialog}><NavLink to={'/dialog' + dialog.id}><p>{dialog.name}</p></NavLink></div>)
  })
 
    return (


        <div className={DialogsCss.dialogWrapper}>
                {arrDialog}
                </div>
    )

}



export default DialogItem;