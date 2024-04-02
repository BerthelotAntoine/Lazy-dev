import Card from "../Card/Card";

function CardList({ name, price, image }) {
  return (
    <div className="cardList">
      <Card name={name} price={price} image={image} />
    </div>
  );
}

export default CardList;
