import React, { useState, useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import emotionsData from '../../testData/emotionsData';
import Header from '../Header/Header';
import Form from '../Form/Form';

import './App.css';

function App() {
  const [emotions, setEmotions] = useState([]);
  const [userEmotion, setUserEmotion] = useState("");
  const [requestedResource, setRequestedResource] = useState("");

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
          <Switch>
            <Route 
              exact path="/"
              render={() => 
                <Form 
                  message="How are you feeling?" 
                  formFields={emotions} 
                  handleSubmit={setUserEmotion} 
                />  
              }
            />
            <Route
              exact path="/:emotionType"
              render={() =>
                <Form 
                  message="Would you like some words of encouragement or coping strategies?" 
                  formFields={[{ id: 1, type: "words of encouragement"}, { id: 2, type: "coping strategies"}]} 
                  handleSubmit={setRequestedResource} 
                />
              } 
            />
          </Switch>
        </section>
      </main>
    </div>
  );
}

export default App;
