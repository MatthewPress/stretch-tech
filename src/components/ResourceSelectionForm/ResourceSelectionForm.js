// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './ResourceSelectionForm.css';

function ResourceSelectionForm({ message, formFields, handleSubmit, userEmotion }) {

  const buttons = formFields.map(field => {
    return (
      <Link 
        to={`/${userEmotion.type}/${field.type}`} 
        key={field.id}
      >
        <button
          className="hvr-pulse"
          type="submit" 
          onClick={() => handleSubmit(field)} 
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

export default ResourceSelectionForm;