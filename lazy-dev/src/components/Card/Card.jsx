function Card({ items }) {
  console.log(items);
  return (
    <div>
      <img src={items.image} alt={items.name} />
      <h2>{items.name}</h2>
      <p>{items.price}</p>
    </div>
  );
}

export default Card;
