function Card({ name, price, image }) {
  return (
    <div>
      <img src={image} alt={name} className="imgCard" />
      <h2 className="titleCard">{name}</h2>
      <p className="priceCard">{price}</p>
    </div>
  );
}

export default Card;
