// jshint esversion:6
import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Chats.css';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { db } from './firebase';
import Chat from './Chat';

function Chats() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => setPosts(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
        }))))
    }, []);
  return (
    <div className='chats'>
        <div className="chats__header">
            <Avatar className='chats__avatar' />
            <div className="chats__search">
                <SearchIcon />
                <input type="text" placeholder='Amigos'/>
            </div>
            <ChatBubbleIcon className='chats__chatIcon'/>
        </div>

        {/* Chats Post Section */}
        <div className="chats__posts">
            {posts.map(({ id, data: {picProfile, username, timestamp, imageUrl, read}}) => (
                <Chat key={id} id={id} username={username} timestamp={timestamp} imageUrl={imageUrl} read={read} picProfile={picProfile}/>
            ))}
        </div>
    </div>
  )
}

export default Chats