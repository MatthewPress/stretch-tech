import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { getData } from '../../apiCalls/apiCalls'
import Header from '../Header/Header'
import Form from '../Form/Form'
import ResourceSelectionForm from '../ResourceSelectionForm/ResourceSelectionForm'
import ResourceContainer from '../ResourceContainer/ResourceContainer'
import ErrorContainer from '../ErrorContainer/ErrorContainer'
import AddResourceForm from '../AddResourceForm/AddResourceForm'
import './App.css'

function App() {
  const [emotions, setEmotions] = useState([])
  const [userEmotion, setUserEmotion] = useState({})
  const [selectedResource, setSelectedResource] = useState({})
  const [resources, setResources] = useState([])
  const [errorMessage, setErrorMessage] = useState("404: Why not start at the beginning?")
  const [allResources, setAllResources] = useState([])

  useEffect(() => {
    getData(`/emotions`)
      .then((data) => {
        setEmotions(data)
      })
      .catch((error) => {
        setErrorMessage("Sorry, we couldn't get our EMOTIONS data. Maybe try starting again.")
      })
  }, [])

  const handleEmotionSelection = (selection) => {
    setUserEmotion(selection)
  }

  const handleResourceSelection = (selection) => {
    setSelectedResource(selection)

    getData(`/${selection}`)
      .then((data) => {
        setAllResources(data)
        const requestedResource = data.filter(resource => resource.emotion_id === userEmotion.id)
        setResources(requestedResource)
      })
      .catch((error) => {
        setErrorMessage("Sorry, we couldn't get our RESOURCES data. Maybe try starting again.")
      })
  }

  const handleStartAgain = () => {
    setUserEmotion({})
    setSelectedResource({})
  }

  return (
    <div className="app--container">
      <Header handleStartAgain={handleStartAgain} />
      <main>
        <section className="main--container">
          {
            !emotions.length
              ? <ErrorContainer errorMessage={errorMessage} handleStartAgain={handleStartAgain} />
              : <Switch>
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
                      !Object.keys(userEmotion).length 
                        ? <ErrorContainer errorMessage={errorMessage} handleStartAgain={handleStartAgain} />
                        : <ResourceSelectionForm 
                            message="Would you like some words of encouragement or coping strategies?" 
                            formFields={[{ id: 1, type: "quotes"}, { id: 2, type: "advice"}]} 
                            handleSubmit={handleResourceSelection}
                            userEmotion={userEmotion}
                          />
                    } 
                  />
                  <Route 
                    exact path={`/:emotionType/:resourceType`}
                    render={() => 
                      !resources.length
                        ? <ErrorContainer errorMessage={errorMessage} handleStartAgain={handleStartAgain} /> 
                        : <ResourceContainer 
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
                      !Object.keys(userEmotion).length && !Object.keys(selectedResource).length
                        ? <ErrorContainer errorMessage={errorMessage} handleStartAgain={handleStartAgain} /> 
                        : <AddResourceForm selectedResource={selectedResource} resources={resources} allResources={allResources}/>
                    }
                  />
                  <Route 
                    render={() =>
                      <ErrorContainer errorMessage={errorMessage} handleStartAgain={handleStartAgain}/>
                    } 
                  />
                </Switch>
          }
        </section>
      </main>
    </div>
  )
}

export default App