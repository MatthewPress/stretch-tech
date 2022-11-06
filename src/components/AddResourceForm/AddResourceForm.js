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
        console.log("AddResurce Catch", error)
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
      <p className='call-to-action'>{`Please add your own message to our ${selectedResource}`}</p>
      <form className='resource-form'>
        <input
        type='text'
        placeholder='Type your message here'
        name='resource'
        value={userInput}
        onChange={event => setUserInput(event.target.value)}
        required
        />
        { errorMessage ? <p>{errorMessage}</p> : <p>{confirmationMessage}</p> }
        <div className='resource-button--container'>
          <button className='resource--button submit' onClick={(event) => addPositivity(event) }>SUBMIT</button>
          <Link to='/'>
            <button className='resource--button'>START AGAIN</button>
          </Link>
        </div>
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