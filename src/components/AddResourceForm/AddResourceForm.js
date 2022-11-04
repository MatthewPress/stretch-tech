import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import "./AddResourceForm.css"
import { postData } from "../../apiCalls"

const AddResourceForm = ({ selectedResource }) => {

  const [useinput, setUserInput] = useState('');


  // Need function to do post on click
  // using postData function

  return (
    <section>
      <h2 className='call-to-action'>Please enter new {selectedResource}</h2>
      <form className='resource-form'>
        <input
        type='text'
        placeholder='Enter text'
        name='resource'
        value={useinput}
        onChange={event => setUserInput(event.target.value)}
        />
        <button className='submit-button'>Submit</button>
        <Link to='/'>
          <button className='home-button'>Start Again</button>
        </Link>
      </form>
    </section>
  )
}

export default AddResourceForm