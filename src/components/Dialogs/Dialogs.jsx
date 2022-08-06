import DialogsCss from './Dialogs.module.css'
import Messages from './Message/Message'
import DialogItem from './DialogItem/DialogItem';






const Dialogs = (props) => {
   
    return (

        <div className={DialogsCss.dialogs}>

            <DialogItem dialogsData={props.dialogsData.dialogsData} />
            <Messages messagesData={props.dialogsData.messagesData} addMessage={props.addMessage}  />

        </div>


    )

}

export default Dialogs;