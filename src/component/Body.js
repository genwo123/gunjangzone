import React, { useState, useEffect } from 'react';
import '../CSS/Body.css'; // 스타일 파일을 import
import RTC from './RTC';
import Party from './Party';
import { initializeLocalStorage } from './initializeLocalStorage';

const Body = ({ selectedOptions, apiMode }) => {
  useEffect(() => {
    initializeLocalStorage();
  }, []);

  return (
    <div className="body-container">
      <div className="rtc-wrapper">
        <RTC />
      </div>
      <div className="party-wrapper">
        <Party selectedOptions={selectedOptions} apiMode={apiMode} />
      </div>
    </div>
  );
}

export default Body;
