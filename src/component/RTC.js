import React, { useState, useRef, useEffect } from 'react';
<<<<<<< HEAD
import adapter from 'webrtc-adapter'; // webrtc-adapter를 import 합니다.
import { captureScreen } from './OCR/CaptureScreen'; // CaptureScreen.js에서 함수 import
import { runOCR } from './OCR/OCR'; // OCR.js에서 함수 import
import '../CSS/RTC.css'; // 스타일 파일을 import 합니다.
=======
import adapter from 'webrtc-adapter';
import '../CSS/RTC.css';
import { captureScreen } from './OCR/CaptureScreen';
import { runOCR } from './OCR/OCR';
import { fetchPartyProfiles } from './apiService.js';
import Party from './Party';
>>>>>>> 1982e3a543d2f2c4d737421084ffa6649b4f7b56

const RTC = ({ onTextExtracted }) => {
  const [isSharing, setIsSharing] = useState(false);
  const [error, setError] = useState('');
  const [profileData, setProfileData] = useState([]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const outputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selection, setSelection] = useState({ startX: 0, startY: 0, width: 0, height: 0 });
  const [extractedText, setExtractedText] = useState([]);
  const [canvasDimensions, setCanvasDimensions] = useState({ width: '0', maxWidth: '0', display: 'none' });

  useEffect(() => {
    if (adapter.browserDetails.browser === 'firefox') {
      adapter.browserShim.shimGetDisplayMedia(window, 'screen');
    }

    if (navigator.mediaDevices && 'getDisplayMedia' in navigator.mediaDevices) {
      document.getElementById('toggleButton').disabled = false;
    } else {
      setError('getDisplayMedia is not supported');
    }
  }, []);

  const handleSuccess = (stream) => {
    setIsSharing(true);
    videoRef.current.srcObject = stream;

    stream.getVideoTracks()[0].addEventListener('ended', () => {
      setError('The user has ended sharing the screen');
      setIsSharing(false);
    });
  };

  const handleError = (error) => {
    setError(`getDisplayMedia error: ${error.name}`);
    console.error(error);
  };

  const startSharing = () => {
    const options = { audio: true, video: true };

    navigator.mediaDevices.getDisplayMedia(options)
      .then(handleSuccess)
      .catch(handleError);
  };

  const stopSharing = () => {
    if (videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsSharing(false);
  };

  const toggleSharing = () => {
    if (isSharing) {
      stopSharing();
    } else {
      startSharing();
    }
  };

  const handleMouseDown = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    setIsDragging(true);
    setSelection({ startX: e.clientX - rect.left, startY: e.clientY - rect.top, width: 0, height: 0 });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const rect = canvasRef.current.getBoundingClientRect();
      const width = e.clientX - rect.left - selection.startX;
      const height = e.clientY - rect.top - selection.startY;
      setSelection({ ...selection, width, height });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleOCR = async () => {
    const result = await runOCR(canvasRef, outputRef);
    setExtractedText(result);
    if (onTextExtracted) {
      onTextExtracted(result);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (selection.width && selection.height) {
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 2;
      ctx.strokeRect(selection.startX, selection.startY, selection.width, selection.height);
    }
  }, [selection]);

  return (
    <div className="rtc-container">
      <div className="top-buttons">
<<<<<<< HEAD
        <button id="toggleButton" onClick={toggleSharing}>
=======
      <button id="toggleButton" onClick={toggleSharing}>
>>>>>>> 1982e3a543d2f2c4d737421084ffa6649b4f7b56
          {isSharing ? '공유 중지' : '공유 시작'}
        </button>
        <button className="adjust-position-button" onClick={() => captureScreen(videoRef, canvasRef, setCanvasDimensions)}>캡쳐</button>
        <button className='extraction-nickname' onClick={handleOCR}>닉네임 추출</button>
        </div>  
      <div className="video-container">
        <video ref={videoRef} autoPlay playsInline className="rtc-video"></video>
        <canvas
          ref={canvasRef}
          className="selection-canvas"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
<<<<<<< HEAD
          style={canvasDimensions} // 캔버스 스타일 업데이트
=======
          style={canvasDimensions}
>>>>>>> 1982e3a543d2f2c4d737421084ffa6649b4f7b56
        ></canvas>
      </div>
      <div ref={outputRef} id="outputText" className="output-text"></div>
      <div className="extracted-text-container">
        {extractedText.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      {error && <div id="errorMsg">{error}</div>}
      </div>
  );
};

export default RTC;