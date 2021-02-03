
const rerender = () => {
    console.log('state is changed');
}
const state = {
    dialogsPage: {
        dialogs: [
            {id: 1 ,name: 'Andrey'},
            {id: 2 ,name: 'Stanislav'},
            {id: 3 ,name: 'Dmitriy'},
        ],
        messages: [
            {id:1, message: 'Hi'},
            {id:2, message: 'kak'},
            {id:3, message: 'tvoi'},
            {id:4, message: 'dela?'},
        ],
    },
    profilePages: {
        posts: [
            {id:1, message: 'i', likeCount: 51},
            {id:2, message: 'love', likeCount: 52},
            {id:3, message: 'you', likeCount: 45},
            {id:4, message: '!!!', likeCount: 53},
        ],
        newPostText: 'it=kamasutra.com',
    }
};

export const addPost = () => {
    let newPost = {id:19, message:state.profilePages.newPostText , likeCount: 50};
    state.profilePages.posts.push(newPost);
    state.profilePages.newPostText = '';
    rerender(state);
}

export const updateNewPostText = (newText) => {
    state.profilePages.newPostText = newText;
    rerender(state);
}
export default state;