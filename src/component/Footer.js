import React, { useState } from 'react';
import '../CSS/Footer.css';

const Footer = () => {
  // 상태 변수 설정
  const [expanded, setExpanded] = useState(false);

  // 푸터 크기 변경 함수
  const toggleSize = () => {
    setExpanded(!expanded); // expanded 상태를 토글
  };

  // 푸터의 클래스를 동적으로 설정
  const footerClass = expanded ? "footer-expanded" : "footer-normal";
  const icon = expanded ? "↓" : "↑"; // 버튼 아이콘

  return (
    <footer className={footerClass}>
      <p>레이드 설정</p>
      <button onClick={toggleSize}>{icon}</button>
    </footer>
  );
};

export default Footer;
