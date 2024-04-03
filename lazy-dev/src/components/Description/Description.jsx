function Description({itemList}){
    console.log();
    return (
        <div className="description">
        <img src={itemList.image} alt={itemList.name} className="imgCard" />
        <h2 className="titleCard">{itemList.name}</h2>
        <p className="priceCard">{itemList.price}</p>
        <p>{itemList.description}</p>
        <a href="#">#{itemList.categorie}</a>
      </div>
    )
}

export default Description;