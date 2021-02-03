import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = ({dialogs, messages}) => {

    const dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <div><textarea></textarea></div>
                    <div>
                        <button>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;