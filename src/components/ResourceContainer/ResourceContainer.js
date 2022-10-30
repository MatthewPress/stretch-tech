import './ResourceContainer.css';

function ResourceContainer({ resources }) {
  console.log({resources})
  return (
    <article className="resource--container">
      <div className="resource-display--container">
        <p className="resource-display">{resources[0].resourceString}</p>
      </div>
    </article>
  )
}

export default ResourceContainer;