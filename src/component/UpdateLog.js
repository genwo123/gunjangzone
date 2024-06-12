import React from 'react';
import '../CSS/UpdateLog.css';

const UpdateLog = ({ onClose }) => {
  const logs = [
    { date: '24.06.15', content: 'AWS 서비스 등록 이후 시연 시작' },
    { date: '24.04.19', content: '' },
    { date: '24.04.10', content: '' },
    { date: '24.04.08', content: '' },
    { date: '24.04.04', content: '' },
    { date: '24.04.01', content: '' },
    { date: '24.03.29', content: '' },
    { date: '24.04.04', content: '' },
    { date: '24.04.01', content: '' },
    { date: '24.03.29', content: '' },
    { date: '24.04.04', content: '' },
    { date: '24.04.01', content: '' },
    { date: '24.03.29', content: '' },
    { date: '24.04.04', content: '' },
    { date: '24.04.01', content: '' },
    { date: '24.03.29', content: '' },
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>업데이트 로그</h2>
        <button className="close-button" onClick={onClose}>닫기</button>
        <div className="log-entries">
          {logs.map((log, index) => (
            <div key={index} className="log-entry">
              <strong>{log.date}</strong>
              <p>{log.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdateLog;
