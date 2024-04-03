function Card({ name, price, image, handleDescription, itemDescription, itemList }) {


  return (
    <div>
      <img src={image} alt={name} className="imgCard" />
      <h2 className="titleCard">{name}</h2>
      <p className="priceCard">{price}</p>
      <button onClick={()=> handleDescription()}>en savoir plus</button>
    </div>
  );
}

export default Card;
