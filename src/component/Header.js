import React, { useState, useEffect } from 'react';
import '../CSS/Header.css'; // 헤더 스타일 파일을 import
import logo from '../image/GJZ_ICON.png';
import UpdateLog from './UpdateLog'; // UpdateLog 컴포넌트 import
import guide from './pdf/Guide.pdf'


const Header = ({ setApiMode }) => {
  const [apiInput, setApiInput] = useState(''); // API 입력 상태 추가
  const [isApiInputActive, setIsApiInputActive] = useState(false); // API 입력창 활성화 여부 상태 추가
  const [isUpdateLogOpen, setIsUpdateLogOpen] = useState(false); // 업데이트 로그 모달 상태 추가

  useEffect(() => {
    const savedApiKey = localStorage.getItem('API-User');
    if (savedApiKey) {
      setApiInput(savedApiKey);
      setIsApiInputActive(true);
    }
  }, []);

  const toggleApiInput = () => {
    if (isApiInputActive && apiInput) {
      localStorage.setItem('API-User', apiInput);
      setApiMode(true);
    } else {
      setApiMode(false);
    }
    setIsApiInputActive(!isApiInputActive); // 버튼을 누를 때마다 API 입력창 활성화 상태 토글
  };

  const handleInputChange = (e) => {
    setApiInput(e.target.value); // 입력값을 상태에 반영
  };

  const toggleUpdateLog = () => {
    setIsUpdateLogOpen(!isUpdateLogOpen); // 버튼을 누를 때마다 업데이트 로그 모달 상태 토글
  };

  

  return (
    <div className="header-container">
      <img src={logo} alt="조 명" className="logo" />
      <h2>군장존</h2>
      <div className="button-container"> {/* 버튼 및 입력창을 포함하는 컨테이너 */}
        <a href={guide} className='GuideBtn'  target="_blank" rel="noreferrer noopener">가이드북</a>
        <button className="LogBtn" onClick={toggleUpdateLog}>업데이트 로그</button>
        <button className="APIBtn" onClick={toggleApiInput}>
          {isApiInputActive ? 'API 모드 켜기' : 'API 모드 끄기'}
        </button>
        <input
          type="text"
          placeholder="API 입력창"
          className={`input ${isApiInputActive ? 'active' : ''}`}
          value={apiInput}
          onChange={handleInputChange}
          disabled={!isApiInputActive}
        />
      </div>
      {isUpdateLogOpen && <UpdateLog onClose={toggleUpdateLog} />}
    </div>
  );
}

export default Header;
