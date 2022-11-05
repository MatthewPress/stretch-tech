import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import "./AddResourceForm.css"
import { postData } from "../../apiCalls/apiCalls"

const AddResourceForm = ({ selectedResource, resources, allResources }) => {

  const [userInput, setUserInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [confirmationMessage, setConfirmationMessage] = useState('')

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
        setErrorMessage(`Sorry, a ${error} has error occurred. Please try again.`);
    })
    confirmationSetter()
    clearInput()
  }

  const clearInput = () => {
    setUserInput('')
  }

  const confirmationSetter = () => {
    if(!errorMessage) {
      setConfirmationMessage(`New ${selectedResource} added!`)
    }
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
        { errorMessage ? <p>{errorMessage}</p> : <p>{confirmationMessage}</p> }
        <button className='submit-button' onClick={(event) => addPositivity(event) }>Submit</button>
        <Link to='/'>
          <button className='home-button'>Start Again</button>
        </Link>
      </form>
    </section>
  )
}

export default AddResourceForm

AddResourceForm.propTypes = {
  selectedResource: PropTypes.string.isRequired,
  resources: PropTypes.arrayOf(PropTypes.object).isRequired,
  allResources: PropTypes.arrayOf(PropTypes.object).isRequired,
}