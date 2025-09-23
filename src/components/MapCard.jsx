import Link from "next/link";

const MapCard = ({ Name, Image, Link: linkTo = "", State = "" }) => {
  const finalImage = `/images/${Image}`;

  let cardClass = "card";
  let clickable = true;

  if (State === "Soon") {
    cardClass = "soon-card";
    clickable = false;
  } else if (State === "New") {
    cardClass = "new-card";
    clickable = true;
  }

  const card = (
    <article className={cardClass}>
      <div className="card-image">
        <img src={finalImage} alt={Name} />
      </div>
      <div translate="no" className="card-text">
        {Name}
      </div>
    </article>
  );

  return clickable && linkTo ? <Link href={linkTo}>{card}</Link> : card;
};

export default MapCard;
