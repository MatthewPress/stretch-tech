import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import './ResourceContainer.css';

function ResourceContainer({ resources, handleStartAgain, userEmotion, selectedResource }) {
  return (
    <article className="resource--container">
      <div className="resource-display--container">
        <p className="resource-display">{resources[Math.floor(Math.random() * resources.length)].content}</p>
      </div>
      <div className="resource-button--container">
        <Link to={`/${userEmotion.name}/${selectedResource}/addition`}>
          <button className="resource--button" name="addMessage">
            ADD A MESSAGE
          </button>
        </Link>
        <Link to="/">
          <button className="resource--button" onClick={() => handleStartAgain()}>
            START AGAIN
          </button>
        </Link>
      </div>
    </article>
  )
}

export default ResourceContainer;

ResourceContainer.prototypes = {
  resources: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleStartAgain: PropTypes.func.isRequired, 
  userEmotion: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    created_at: PropTypes.string,
    updated_at:PropTypes.string,
  }).isRequired,
  selectedResource: PropTypes.string.isRequired,

}