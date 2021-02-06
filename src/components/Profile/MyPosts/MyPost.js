import React from 'react';
import classes from "./MyPost.module.css";
import Post from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/store";


const MyPost = ({posts,newPostText,dispatch}) => {
    let newPostEl = React.createRef();

    const addPostOne = () => {
        dispatch(addPostAC());
    }

    const onPostChange = () => {
        let text = newPostEl.current.value;
        dispatch(updateNewPostTextAC(text));
    }

    const postsElements = posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={ newPostEl } value={ newPostText } onChange={onPostChange}/>
                <div>
                    <button onClick={addPostOne}>addPost</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPost;