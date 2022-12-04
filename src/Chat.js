// jshint esversion:6
import { Avatar } from '@mui/material';
import React from 'react';
import './Chat.css';
import StopRoundedIcon from '@mui/icons-material/StopRounded';
import ReactTimeago from 'react-timeago';

function Chat( id, picProfile, username, timestamp, imageUrl, read) {
    const open = () => {
        if(!read){
            dispatch(selectmage)
        }
    }
    
  return (
    <div onClick={open} className='chat'>
        <Avatar className='chat__avatar' src={picProfile} />
        <div className="chat__info">
            <h4>{username}</h4>
            <p>Tap to view - <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} /></p>
        </div>

        {!read && <StopRoundedIcon className='chat__readIcon'/>}
    </div>
  )
}

export default Chat