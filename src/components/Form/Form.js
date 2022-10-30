// import React, { useState } from 'react';

import './Form.css';

function Form({ message, formFields, handleSubmit }) {
  console.log({formFields})

  const buttons = formFields.map(field => {
    return <button type="submit" onClick={(event) => handleSubmit(event)} value={field.type} key={field.value}>{field.type}</button>
  });
  
  console.log({buttons})

  return (
    <form>
      <p>{message}</p>
      <div className="button--container">
        {buttons}
      </div>
    </form>
  )
}

export default Form;