// import React, { useState } from 'react';

import './Form.css';

function Form({ emotions, handleSubmit }) {
  console.log({emotions})

  const buttons = emotions.map(emotion => {
    return <button type="submit" onClick={(event) => handleSubmit(event)} value={emotion.type} key={emotion.value}>{emotion.type}</button>
  });
  
  console.log({buttons})

  return (
    <form>
      <p>How are you feeling today?</p>
      <div className="button--container">
        {buttons}
      </div>
    </form>
  )
}

export default Form;