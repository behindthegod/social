const dialogsReducer = (state, action) => {
    const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
    const SEND_MESSAGE = 'SEND_MESSAGE';

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 56, message: body})
            break;
    }
    return state;
}

export default dialogsReducer;