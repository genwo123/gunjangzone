import React from 'react';
import '../CSS/Party.css'; // 스타일 파일을 import

const Party = () => {
  const members = [
    { name: '김건우', role: '파티장', check:'o' },
    { name: '한상호', role: '파티원', check:'o' },
    { name: '김준호', role: '사망 파티원', check:'x' }
  ];

  return (
    <div className="party-container">
      <h2>군장 검사</h2>
      <table>
        <thead>
          <tr>
            <th>닉네임</th>
            <th>직업</th>
            <th>군장검사통과</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.role}</td>
              <td> {member.check}</td>
            </tr>
          ))}
          {/* 나머지 빈 행 추가 */}
          {Array.from({ length: 4 - members.length }).map((_, index) => (
            <tr key={`empty-${index}`}>
              <td> - </td>
              <td> - </td>
              <td> - </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Party;
