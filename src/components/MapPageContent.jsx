import { Link } from 'react-router-dom'

const MapPageContent = ({children, mapName}) => {
    return (
      <section className='map-page'>
      <header className='map-card-header'>
        <Link to="/" className='close-button'>Back</Link>
        <h1>{mapName}</h1>
      </header>
      <article className='map-card'>
        {children}
      </article>
      </section>
    )
}

export default MapPageContent