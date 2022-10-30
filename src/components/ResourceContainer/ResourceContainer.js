import './ResourceContainer.css';

function ResourceContainer({ resources }) {
  console.log({resources})
  return (
    <p className="resource--display">{resources[0].resourceString}</p>
  )
}

export default ResourceContainer;