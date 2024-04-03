function Filter({ setItemCategorie, itemList }) {
  const filterItem = ["Vêtement", "Objets", "Application"];
  

  const handleCategorie = (i) => {
    setItemCategorie(i);
  };

  return (
    <div>
      {filterItem.map((f, i) => (
        <button key={f} onClick={() => handleCategorie(i)}>
          {f}
        </button>
      ))}
    </div>
  );
}

export default Filter;
