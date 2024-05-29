import React, { useState } from 'react';
import '../CSS/Header.css'; // 헤더 스타일 파일을 import

const Header = () => {
  const [apiInput, setApiInput] = useState(''); // API 입력 상태 추가
  const [isApiInputActive, setIsApiInputActive] = useState(false); // API 입력창 활성화 여부 상태 추가

  const toggleApiInput = () => {
    setIsApiInputActive(!isApiInputActive); // 버튼을 누를 때마다 API 입력창 활성화 상태 토글
  };

  const handleInputChange = (e) => {
    setApiInput(e.target.value); // 입력값을 상태에 반영
  };

  return (
    <div className="header-container">
      <h3 className="logo">조 명</h3>
      <div className="button-container"> {/* 버튼 및 입력창을 포함하는 컨테이너 */}
        <button className="button">가이드북</button>
        <button className="button">RTC</button>
        <button className="APIBtn" onClick={toggleApiInput}>API</button>
        <span className="input-label">API 키</span>
        <input
          type="text"
          placeholder="API 입력창"
          className={`input ${isApiInputActive ? 'active' : ''}`}
          value={apiInput}
          onChange={handleInputChange}
          disabled={!isApiInputActive}
        />
      </div>
    </div>
  );
}

export default Header;
