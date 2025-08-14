import Link from "next/link";

const MapCard = ({ Name, Image, Link: linkTo }) => {
  const finalImage = `/images/${Image}`;

  return (
    <Link href={linkTo}>
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
