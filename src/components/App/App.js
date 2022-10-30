import React, { useState, useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

// remove when backend is available
import emotionsData from '../../testData/emotionsData';
import resourcesData from '../../testData/resourcesData';

import Header from '../Header/Header';
import Form from '../Form/Form';
import ResourceQueryForm from '../ResourceQueryForm/ResourceQueryForm';
import ResourceContainer from '../ResourceContainer/ResourceContainer';

import { getData } from '../../apiCalls/apiCalls';

import './App.css';

function App() {
  const [emotions, setEmotions] = useState([]);
  const [userEmotion, setUserEmotion] = useState({});
  const [requestedResource, setRequestedResource] = useState({});
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // replace emotionsData with url path
    getData(emotionsData)
      .then((data) => {
        setEmotions(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const handleResourceSelection = (request) => {
    setRequestedResource(request.id);
    getData(resourcesData)
      .then((data) => {
        setResources(data);
      })
      .catch((error) => {
        console.log(error);
      })
    setResources(resourcesData);
  }

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
                  handleSubmit={handleResourceSelection}
                  userEmotion={userEmotion}
                />
              } 
            />
            <Route 
              exact path={`/:emotionType/:resourceType`}
              render={() => 
                <ResourceContainer resources={resources} />
              }
            />
          </Switch>
        </section>
      </main>
    </div>
  );
}

export default App;
