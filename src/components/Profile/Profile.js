import React from 'react';
import classes from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = ({posts,addPost, newPostText, updateNewPostText}) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPost posts={posts} addPost={addPost} newPostText={newPostText} updateNewPostText={updateNewPostText}/>
        </div>

    )
};

export default Profile;