import React, { useState, useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import emotionsData from '../../testData/emotionsData';
import Header from '../Header/Header';
import Form from '../Form/Form';

import './App.css';

function App() {
  const [emotions, setEmotions] = useState([]);

  useEffect(() => {
    setEmotions(emotionsData);
  }, []);

  return (
    <div className="app--container">
      <NavLink to="/">
        <Header />
      </NavLink>
      <main>
        <section className="main--container">
          <Route 
            exact path="/"
            render={() => 
              <Form emotions={emotions} />  
            }
          />
          {/* <QueryForm emotions={emotions} /> */}
        </section>
      </main>
    </div>
  );
}

export default App;
