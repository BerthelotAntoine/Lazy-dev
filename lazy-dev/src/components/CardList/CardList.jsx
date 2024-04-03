import Card from "../Card/Card";

function CardList({ name, price, image, setItemDescription, itemDescription,itemList }) {
  
  console.log(itemList.price);
  
  const handleDescription = () => {
    setItemDescription()
  }

  
  return (
    <div className="cardList">
      <Card name={name} price={price} image={image} handleDescription={handleDescription} itemList={itemList[itemDescription]} />
    </div>
  );
}

export default CardList;
