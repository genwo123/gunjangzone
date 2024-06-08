// src/utils/csvToLocalStorage.js
import Papa from 'papaparse';

export const csvToLocalStorage = (csvFilePath, localStorageKey) => {
  fetch(csvFilePath)
    .then(response => response.text())
    .then(csvText => {
      Papa.parse(csvText, {
        header: true,
        complete: (results) => {
          const jsonData = results.data;
          localStorage.setItem(localStorageKey, JSON.stringify(jsonData));
        }
      });
    })
    .catch(error => {
      console.error('Error fetching or parsing CSV:', error);
    });
};
