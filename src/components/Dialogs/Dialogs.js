import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/store";


const Dialogs = ({dialogs, messages, newMessageBody,dispatch}) => {

    const dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageElements = messages.map(m => <Message message={m.message}/>);

    const onSendMessageClick = () => {
        dispatch(sendMessageAC());
    }
    const onNewMessageChange = (e) => {
        let body = e.currentTarget.value;
        dispatch(updateNewMessageBodyAC(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <div><textarea placeholder='Enter your text'
                                   value={newMessageBody}
                                   onChange={onNewMessageChange}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;