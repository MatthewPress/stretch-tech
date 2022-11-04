// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Form.css';

function Form({ message, formFields, handleSubmit }) {

  const buttons = formFields.map(field => {
    return (
      <Link 
        to={`/${field.name}`} 
        key={field.id}
      >
        <button
          className="hvr-pulse"
          type="submit" 
          onClick={() => handleSubmit(field)} 
          value={field.id}
        >
          {field.name.toUpperCase()}
        </button>
      </Link>
    )
  });

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