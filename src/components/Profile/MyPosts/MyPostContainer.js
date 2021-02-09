import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/store";
import MyPost from "./MyPost";


const MyPostContainer = ({store,newPostText,posts}) => {


    const addPostOne = () => {
        store.dispatch(addPostAC());
    }

    const onPostChange = (text) => {
        store.dispatch(updateNewPostTextAC(text));
    }


    return (
        <MyPost updateNewPostText={onPostChange} addPost={addPostOne}
                newPostText={newPostText}
                posts={posts}/>
    )
};

export default MyPostContainer;