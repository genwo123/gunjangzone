// src/utils/csvToLocalStorage.js
import Papa from 'papaparse';

export const csvToLocalStorage = () => {
  const csvFiles = [
    { path: 'src/csv/LegionRaid.csv', raidName: 'legion' },
    { path: 'src/csv/AbyssRaid.csv', raidName: 'abyss' },
    { path: 'src/csv/KazerosRaid.csv', raidName: 'kazeros' },
    { path: 'src/csv/EpicRaid.csv', raidName: 'epic' }
  ];

  csvFiles.forEach(({ path, raidName }) => {
    fetch(path)
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const jsonData = results.data;
            jsonData.forEach(row => {
              const raidKey = `${row['레이드이름']}-default`;
              localStorage.setItem(raidKey, JSON.stringify(row));
            });
          }
        });
      })
      .catch(error => {
        console.error(`Error fetching or parsing CSV at ${path}:`, error);
      });
  });
};
