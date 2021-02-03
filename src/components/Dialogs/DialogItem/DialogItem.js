import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";
import React from "react";

const DialogItem = ({name, id}) => {
    const path = '/dialogs/' + id
    return (
        <div><NavLink to={path} className={s.dialog + ' ' + s.active}>{name}</NavLink></div>
    )
};

export default DialogItem;