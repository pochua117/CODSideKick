import { Link } from "react-router-dom";

const MapCard = ({ Name, Image, Link: linkTo }) => {
  const finalImage = `./images/${Image}`;

  return (
    <Link to={linkTo}>
      <article className="card">
        <div className="card-image">
          <img src={finalImage} alt={Name} />
        </div>
        <div translate="no" className="card-text">
          {Name}
        </div>
      </article>
    </Link>
  );
};

export default MapCard;
