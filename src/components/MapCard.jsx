import { Link } from 'react-router-dom'

const MapCard = ({Text, Image = 'https://picsum.photos/id/10/200/300', Link: linkTo}) => {
    const finalImage = `./src/assets/images/${Image}`

    return (
      <Link to={linkTo}>
      <article className='card'>
        <div className='card-image'>
          <img src={finalImage} alt={Text} />
        </div>
        <div className='card-text'>{Text}</div>
      </article>
      </Link>
    )
  }

export default MapCard