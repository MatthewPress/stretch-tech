import React, { useState, useEffect } from 'react';
import "./AddResourceForm.css"

const AddResourceForm = () => {

  const [useinput, setUserInput] = useState('');


 

  return (
    <form className='resource-form'>
      <input 
      type='text'
      placeholder='Add resource'
      name='resource'
      value={useinput}
      onChange={event => setUserInput(event.target.value)}
      />
      <button className='submit-button'>SUBMIT</button>
    </form>
  )

}

export default AddResourceForm