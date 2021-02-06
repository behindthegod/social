import React from 'react';
import classes from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = ({posts, newPostText, dispatch}) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPost posts={posts} newPostText={newPostText} dispatch={dispatch}/>
        </div>

    )
};

export default Profile;