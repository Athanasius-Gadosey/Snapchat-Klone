// jshint esversion:6
import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Chats.css';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { auth, db } from './firebase';
import Chat from './Chat';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useNavigate } from 'react-router-dom';
import { resetCameraImage } from './features/cameraSlice';


function Chats() {
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => setPosts(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
        }))))
    }, []);

    const takeSnap = () => {
        dispatch(resetCameraImage());
        navigate('/', {replace : true});
    }

  return (
    <div className='chats'>
        <div className="chats__header">
            <Avatar src={user.picProfile} onClick={() => auth.signOut()} className='chats__avatar' />
            <div className="chats__search">
                <SearchIcon className='chats__searchIcon'/>
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

        <RadioButtonUncheckedIcon className='chats__takePicIcon' onClick={takeSnap} fontSize='large'/>
    </div>
  )
}

export default Chats