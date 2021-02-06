import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    state: {
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
            newMessageBody: '',
        },
        profilePage: {
            posts: [
                {id:1, message: 'i', likeCount: 51},
                {id:2, message: 'love', likeCount: 52},
                {id:3, message: 'you', likeCount: 45},
                {id:4, message: '!!!', likeCount: 53},
            ],
            newPostText: 'it-kamasutra.com',
        }
    },
    callSubscriber () {
        console.log('state is changed');
    },
    subscribe (observer) {
        this.callSubscriber = observer;
    },
    getState () {
        return this.state;
    },
    dispatch(action) {
        this.state.profilePage = profileReducer(this.state.profilePage, action);
        this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action);
        this.callSubscriber(this.state);
    }
}

export let addPostAC = () => {
    return {
        type: ADD_POST
    }
}
export let updateNewPostTextAC = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export let updateNewMessageBodyAC = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}
export let sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    }
}
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
export default store;