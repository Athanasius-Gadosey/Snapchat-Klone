// jshint esversion:6
import React, { useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';
import { useNavigate } from 'react-router-dom';
import './WebcamCapture.css';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: 'user',
}

function WebcamCapture() {
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenShot();
        dispatch(setCameraImage(imageSrc));
        navigate('/preview', {replace : true})

    }, [webcamRef]);

  return (
    <div className='webcamCapture'>
        <Webcam 
            audio={false} 
            height={videoConstraints.height} 
            ref={webcamRef} 
            screenshotFormat='image/jpeg'
            width={videoConstraints.width} 
            videoConstraints={videoConstraints}
        />
        <RadioButtonUncheckedIcon className='webcamCapture__button' onClick={capture} fontSize='large' />
        {/* <img src={image} alt="" /> */}
    </div>
  )
}

export default WebcamCapture