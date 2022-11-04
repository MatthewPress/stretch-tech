import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import "./AddResourceForm.css"
import { postData } from "../../apiCalls/apiCalls"

const AddResourceForm = ({ selectedResource, resources, allResources }) => {

  const [userInput, setUserInput] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')


  // Need function to do post on click
  // using postData function

  const addPositivity = (event) => {
    event.preventDefault()
    const path = selectedResource
    const idNum = allResources.length +1
    const emotionID = resources[0].emotion_id
    const positivity = {
      "id": idNum,
      "emotion_id": emotionID,
      "content": userInput
    }

    postData(`/${path}`, idNum, positivity)
    .catch((error) => {
      if(error) {
        setErrorMessage(`Sorry, a ${error} has error occured. Please try again.`);
      } else {
        setConfirmationMessage(`New ${selectedResource} added!`)
      }
    })
    clearInput()
  }

  const clearInput = () => {
    setUserInput('')
  }

  return (
    <section>
      <h2 className='call-to-action'>Please enter new {selectedResource}</h2>
      <form className='resource-form'>
        <input
        type='text'
        placeholder='Enter text'
        name='resource'
        value={userInput}
        onChange={event => setUserInput(event.target.value)}
        />
        {errorMessage ? <p>{errorMessage}</p> : <p>{confirmationMessage}</p>}
        <button className='submit-button' onClick={(event) => addPositivity(event) }>Submit</button>
        <Link to='/'>
          <button className='home-button'>Start Again</button>
        </Link>
      </form>
    </section>
  )
}

export default AddResourceForm