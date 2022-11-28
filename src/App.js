// jshint esversion:6
import React from 'react';
import './App.css';
import firebase from 'firebase';
import WebcamCapture from './WebcamCapture';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats';

function App() {
  return (
    <div className="app">
    <h1>Let build Snapchat Klone</h1>
      <Router>
        <div className="app__body">
          <Routes>
            <Route exact path='/' element={<WebcamCapture />} />
            <Route path='/preview' element={<Preview />} />
            <Route path='/chats' element={<Chats/>} />
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
