import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/store";


const App = ({state}) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Route path='/profile' render={()=><Profile posts={state.profilePages.posts}
                                                        addPost={addPost}
                                                        newPostText={state.profilePages.newPostText}
                                                        updateNewPostText={updateNewPostText}/>}/>
            <Route path='/dialogs' render={()=><Dialogs dialogs={state.dialogsPage.dialogs}
                                                        messages={state.dialogsPage.messages}/>}/>
        </div>
    );
}

export default App;
