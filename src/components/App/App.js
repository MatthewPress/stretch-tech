import React, { useState, useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import emotionsData from '../../testData/emotionsData';

import Header from '../Header/Header';
import Form from '../Form/Form';
import ResourceQueryForm from '../ResourceQueryForm/ResourceQueryForm';
import ResourceContainer from '../ResourceContainer/ResourceContainer';

import './App.css';

function App() {
  const [emotions, setEmotions] = useState([]);
  const [userEmotion, setUserEmotion] = useState({});
  const [requestedResource, setRequestedResource] = useState({});

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
              exact path={`/:emotionType`}
              render={() =>
                <ResourceQueryForm 
                  message="Would you like some words of encouragement or coping strategies?" 
                  formFields={[{ id: 1, type: "words"}, { id: 2, type: "strategies"}]} 
                  handleSubmit={setRequestedResource}
                  userEmotion={userEmotion}
                />
              } 
            />
            <Route 
              exact path={`/:emotionType/:resourceType`}
              render={() => 
                <ResourceContainer />
              }
            />
          </Switch>
        </section>
      </main>
    </div>
  );
}

export default App;
