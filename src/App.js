import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


const App = ({state,dispatch}) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Route path='/profile' render={()=><Profile posts={state.profilePage.posts}
                                                        dispatch={dispatch}
                                                        newPostText={state.profilePage.newPostText}/>}/>
            <Route path='/dialogs' render={()=><Dialogs dialogs={state.dialogsPage.dialogs}
                                                        newMessageBody={state.dialogsPage.newMessageBody}
                                                        dispatch={dispatch}
                                                        messages={state.dialogsPage.messages}/>}/>
        </div>
    );
}

export default App;
