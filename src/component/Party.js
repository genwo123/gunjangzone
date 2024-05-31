import React, { useState, useEffect } from 'react';
import '../CSS/Party.css'; // 스타일 파일을 import

const Party = () => {
  const [id, setId] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then(response => response.json())
      .then(result => setId(result))
      .catch(error => console.log('error', error));
  }, []);

  // 표의 행과 열 개수 설정
  const rows = 8;
  const cols = 4;

  // 테이블에 들어갈 셀 수 계산
  const totalCells = rows * cols;

  // 행을 렌더링하는 함수
  const renderRows = () => {
    let rows = [];
    for (let i = 0; i < totalCells; i += cols) {
      let rowCells = [];
      for (let j = 0; j < cols; j++) {
        const member = id[i + j] || { userId: ' - ', id: ' - ' }; // API 데이터 없을 경우 빈 값 설정
        rowCells.push(
          <React.Fragment key={i + j}>
            <td>{member.userId}</td>
            <td>{member.id}</td>
          </React.Fragment>
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
