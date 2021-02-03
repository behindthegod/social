import React from 'react';
import classes from "./Post.module.css";

const Post = ({message, likeCount}) => {
    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <div>{message}</div>
                <div>{likeCount}</div>
                <div><img src='https://golos.ua/images/items/2020-08/02/CxJ6myL6cfYB26Mn/img_top.jpg' alt='cat'/></div>
            </div>
        </div>
    )
};

export default Post;