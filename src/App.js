import React, { useEffect } from 'react';
import './App.css';
import Body from './component/Body';
import Header from './component/Header';
import Footer from './component/Footer';
import { initializeLocalStorage } from '../src/component/initializeLocalStorage';
function App() {
  useEffect(() => {
    initializeLocalStorage();
  }, []);

  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
