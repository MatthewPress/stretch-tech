import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './ResourceSelectionForm.css'

function ResourceSelectionForm({ message, formFields, handleSubmit, userEmotion }) {

  const buttons = formFields.map(field => {
    return (
      <Link 
        to={`/${userEmotion.name}/${field.type}`} 
        key={field.id}
      >
        <button
          className="hvr-pulse"
          type="submit" 
          onClick={() => handleSubmit(field.type)} 
          value={field.id}
        >
          {field.type.toUpperCase()}
        </button>
      </Link>
    )
  })

  return (
    <form>
      <p className="form-message">{message}</p>
      <div className="buttons--container">
        {buttons}
      </div>
    </form>
  )
}

export default ResourceSelectionForm

ResourceSelectionForm.prototypes = {
  message: PropTypes.string.isRequired, 
  formFields: PropTypes.arrayOf(PropTypes.string),
  handleSubmit: PropTypes.func.isRequired,
  userEmotion: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    created_at: PropTypes.string,
    updated_at:PropTypes.string,
  }).isRequired
}