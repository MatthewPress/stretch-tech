// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Form.css';

function Form({ message, formFields, handleSubmit }) {

  const buttons = formFields.map(field => {
    return (
      <Link to={`/${field.type}`} key={field.id}>
        <button
          className="hvr-pulse"
          type="submit" 
          onClick={(event) => handleSubmit(event.target.value)} 
          value={field.id}
        >
          {field.type.toUpperCase()}
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