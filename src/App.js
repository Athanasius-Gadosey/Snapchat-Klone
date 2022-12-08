// jshint esversion:6
import React, { useEffect } from 'react';
import './App.css';
// import firebase from 'firebase';
import WebcamCapture from './WebcamCapture';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import { login, logout, selectUser } from './features/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          picProfile: authUser.photoURL,
          id: authUser.uid,
        }));
      } else{
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
    <h1>Let build Snapchat Klone</h1>
      <Router>
        {!user ? (
          <Login />
        ): (
          <div className="app__body">
            <Routes>
              <Route path='/chats/view' element={<ChatView />} />
              <Route exact path='/' element={<WebcamCapture />} />
              <Route path='/preview' element={<Preview />} />
              <Route path='/chats' element={<Chats />} />
            </Routes>
          </div>
        )}
        
      </Router>

    </div>
  );
}

export default App;
