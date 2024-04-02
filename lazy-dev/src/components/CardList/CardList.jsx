import Card from "../Card/Card";

function CardList({ items }) {
  return (
    <div>
      <Card items={items} />
    </div>
  );
}

export default CardList;
