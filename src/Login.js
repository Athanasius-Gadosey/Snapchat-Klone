import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/appSlice';
import { auth, provider } from './firebase';
import './Login.css';

function Login() {
    const dispatch = useDispatch();


    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            dispatch(login({
                username: result.user.displayName,
                picProfile: result.user.photoURL,
                id: result.user.uid,
            }));
        }).catch((error) => alert(error.message));

    };

  return (
    <div className="login">
        <div className="login__container">
            <img src="https://static.vecteezy.com/system/resources/previews/002/432/911/original/social-media-snapchat-original-latest-logo-free-vector.jpg" alt="" />
            <Button variant='outlined' onClick={signIn}>Sign in</Button>
        </div>
    </div>
  )
}

export default Login