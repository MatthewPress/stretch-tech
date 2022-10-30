import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

// remove when backend is available
import emotionsData from '../../testData/emotionsData';
import resourcesData from '../../testData/resourcesData';

import Header from '../Header/Header';
import Form from '../Form/Form';
import ResourceSelectionForm from '../ResourceSelectionForm/ResourceSelectionForm';
import ResourceContainer from '../ResourceContainer/ResourceContainer';

import { getData } from '../../apiCalls/apiCalls';

import './App.css';

function App() {
  const [emotions, setEmotions] = useState([]);
  const [userEmotion, setUserEmotion] = useState({});
  const [selectedResource, setSelectedResource] = useState({});
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // replace emotionsData with url path when backend is available
      // example `/emotions`
    getData(emotionsData)
      .then((data) => {
        setEmotions(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const handleEmotionSelection = (selection) => {
    setUserEmotion(selection);
  }

  const handleResourceSelection = (selection) => {
    setSelectedResource(selection);

    // Problem: not working
    // replace resourcesData with url path when backend is available
      // example `/emotions/${selectedResource.type}`
    getData(resourcesData)
      .then((data) => {
        setResources(data);
      })
      .catch((error) => {
        console.log(error);
      })
    
    // remove when above statement is working
    setResources(resourcesData);
  }

  const handleStartAgain = () => {
    setUserEmotion({});
    setSelectedResource({});
  }

  return (
    <div className="app--container">
      <Header handleStartAgain={handleStartAgain} />
      <main>
        <section className="main--container">
          <Switch>
            <Route 
              exact path="/"
              render={() => 
                <Form 
                  message="How are you feeling?" 
                  formFields={emotions} 
                  handleSubmit={handleEmotionSelection}
                />  
              }
            />
            <Route
              exact path={`/:emotionType`}
              render={() =>
                <ResourceSelectionForm 
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
                <ResourceContainer 
                  resources={resources} 
                  handleStartAgain={handleStartAgain} 
                  userEmotion={userEmotion}
                  selectedResource={selectedResource}
                />
              }
            />
            <Route
              exact path={`/:emotionType/:resourceType/addition`} 
              render={() =>
                <p>Hey</p>
              }
            />
          </Switch>
        </section>
      </main>
    </div>
  );
}

export default App;
