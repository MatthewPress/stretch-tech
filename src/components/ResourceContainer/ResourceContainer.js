import { Link } from 'react-router-dom';

import './ResourceContainer.css';

function ResourceContainer({ resources, handleStartAgain, userEmotion, selectedResource }) {
  return (
    <article className="resource--container">
      <div className="resource-display--container">
        <p className="resource-display">{resources[Math.floor(Math.random() * resources.length)].content}</p>
      </div>
      <div className="resource-button--container">
        <Link to="/">
          <button className="resource--button" onClick={() => handleStartAgain()}>
            START AGAIN
          </button>
        </Link>
        <Link to={`/${userEmotion.name}/${selectedResource}/addition`}>
          <button className="resource--button" name="addMessage">
            ADD A MESSAGE
          </button>
        </Link>
      </div>
    </article>
  )
}

export default ResourceContainer;