import React, { useState, useEffect } from 'react';

import emotionsData from '../../testData/emotionsData';
import Header from '../Header/Header';

import './App.css';

function App() {
  const [emotions, setEmotions] = useState([]);

  useEffect(() => {
    setEmotions(emotionsData);
  }, []);

  return (
    <Header />
  );
}

export default App;
