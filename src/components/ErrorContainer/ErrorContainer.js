import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import './ErrorContainer.css';

function ErrorContainer({ errorMessage, handleStartAgain }) {
  return (
    <article className="resource--container">
      <div className="resource-display--container">
        <p className="resource-display">{errorMessage}</p>
      </div>
      <div className="resource-button--container">
        <Link to="/">
          <button className="resource--button" onClick={() => handleStartAgain()}>
            START AGAIN
          </button>
        </Link>
      </div>
    </article>
  )
}

export default ErrorContainer;

ErrorContainer.prototypes = {
  errorMessage: PropTypes.string.isRequired,
  handleStartAgain: PropTypes.func.isRequired,
}