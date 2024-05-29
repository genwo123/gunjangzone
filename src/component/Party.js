import React from 'react';
import '../CSS/Party.css'; // 스타일 파일을 import

const Party = () => {
  const members = [
    { name: '김건우', check: 'o' },
    { name: '한상호', check: 'o' },
    { name: '김준호', check: 'x' }
  ];

  // 표의 행과 열 개수 설정
  const rows = 8;
  const cols = 4;

  // 테이블에 들어갈 셀 수 계산
  const totalCells = rows * cols;

  // 빈 멤버 객체 생성
  const emptyMember = { name: ' - ', check: ' - ' };

  // 빈 멤버 배열 생성
  const emptyMembers = new Array(totalCells - members.length).fill(emptyMember);

  // 모든 멤버 정보를 포함하는 배열 생성
  const allMembers = [...members, ...emptyMembers];

  // 행을 렌더링하는 함수
  const renderRows = () => {
    let rows = [];
    for (let i = 0; i < totalCells; i += cols) {
      let rowCells = [];
      for (let j = 0; j < cols; j++) {
        const member = allMembers[i + j];
        rowCells.push(
          <td key={j}>{member.name}</td>,
          <td key={j + 'check'}>{member.check}</td>
        );
      }
      rows.push(<tr key={i}>{rowCells}</tr>);
    }
    return rows;
  };

  return (
    <div className="party-container">
      <h2>군장 검사</h2>
      <table>
        <thead>
          <tr>
            <th>닉네임</th>
            <th>군장검사통과</th>
            <th>닉네임</th>
            <th>군장검사통과</th>
            <th>닉네임</th>
            <th>군장검사통과</th>
            <th>닉네임</th>
            <th>군장검사통과</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  );
}

export default Party;
