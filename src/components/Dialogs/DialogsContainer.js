import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/store";
import Dialogs from "./Dialogs";


const DialogsContainer = ({dialogs, messages, newMessageBody,dispatch}) => {

    const onSendMessageClick = () => {
        dispatch(sendMessageAC());
    }
    const onNewMessageChange = (body) => {
        dispatch(updateNewMessageBodyAC(body));
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogs={}/>
};

export default DialogsContainer;