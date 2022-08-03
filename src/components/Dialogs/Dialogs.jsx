import DialogsCss from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const Dialog = (props) => {

    return (
        <div className={DialogsCss.dialog}><NavLink to={'/dialog' + props.id}><p>{props.name}</p></NavLink></div>
    )

}


const Messages = (props)=>{
    return(
        <div className={DialogsCss.message}><p>{props.message}</p></div>
    )
}
const Dialogs = () => {
    return (

        <div className={DialogsCss.dialogs}>
            <div className={DialogsCss.dialogItem}>
                <Dialog name="Vasya" id='1' />
                <Dialog name="Petya" id='2' />
                <Dialog name="Alberto" id='3' />
                <Dialog name="Nikitos" id='4' />
                <Dialog name="Lebowski" id='5' />
                <Dialog name="iValera" id='6' />
            </div>
            <div className={DialogsCss.messages}>

                <Messages message='Hi, How are you?'/>
                <Messages message='What are you going to do at night?'/>
                <Messages message='We make a patie!'/>
                <Messages message='4o slichno?'/>
                <Messages message='Lebowski, Where is our money?!'/>
                <Messages message='Darou'/>
           
            </div>

        </div>


    )

}

export default Dialogs;