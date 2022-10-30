import { Link } from 'react-router-dom';

import './ResourceContainer.css';

function ResourceContainer({ resources, handleStartAgain, userEmotion, requestedResource }) {
  console.log({resources})
  return (
    <article className="resource--container">
      <div className="resource-display--container">
        <p className="resource-display">{resources[0].resourceString}</p>
      </div>
      <div className="resource-button--container">
        <Link to="/">
          <button className="resource--button" onClick={() => handleStartAgain()}>
            START AGAIN
          </button>
        </Link>
        <Link to={`/${userEmotion}/${requestedResource}/addition`}>
          <button className="resource--button" onClick={() => handleStartAgain()}>
            ADD A MESSAGE
          </button>
        </Link>
      </div>
    </article>
  )
}

export default ResourceContainer;