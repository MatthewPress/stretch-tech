import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import "./AddResourceForm.css"

const AddResourceForm = () => {

  const [useinput, setUserInput] = useState('');


 

  return (
    <section>
      <h2 className='call-to-action'>Please enter new (blah)</h2>
      <form className='resource-form'>
        <input
        type='text'
        placeholder='Add resource'
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