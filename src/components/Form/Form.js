// import React, { useState } from 'react';

import './Form.css';

function Form({ message, formFields, handleSubmit }) {
  console.log({formFields})

  const buttons = formFields.map(field => {
    return (
      <button
        className="hvr-pulse"
        type="submit" 
        onClick={(event) => handleSubmit(event)} 
        value={field.type} 
        key={field.id}
      >
        {field.type.toUpperCase()}
      </button>
    )
  });
  
  console.log({buttons})

  return (
    <form>
      <p className="form-message">{message}</p>
      <div className="buttons--container">
        {buttons}
      </div>
    </form>
  )
}

export default Form;