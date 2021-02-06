const profileReducer = (state, action) => {
    const ADD_POST = 'ADD_POST';
    const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 19, message: state.newPostText, likeCount: 50};
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
    }
    return state;
}



export default profileReducer;