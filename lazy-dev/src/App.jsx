import CardList from "./components/CardList/CardList";
import Filter from "./components/Filter/Filter";
import { useState } from "react";
import "./App.css";

const itemList = [
  {
    name: "Peignoir de luxe",
    price: "99.99€",
    image: "../src/assets/peignoir.jpg",
    description:
      "Un magnifique peignoir de luxe pour coder comme dans son lit !",
    categorie: "Vêtement",
  },
  {
    name: "Hoodie de hacker",
    price: "0.001₿",
    image: "../src/assets/hoodie.jpg",
    description:
      "Un super pull à capuche au couleur de la matrice ! Pour coder comme dans les films tout en protégeant tes données ! ",
    categorie: "Vêtement",
  },
  {
    name: "Chausson en moumoute",
    price: "39.99€",
    image: "../src/assets/chaussons.png",
    description:
      "Des chaussons tellement confortable que vous n'allez jamais vous arrêter de coder !",
    categorie: "Vêtement",
  },
  {
    name: "Casque de reducteur de bruit",
    price: "119.89€",
    image: "../src/assets/headphones.jpg",
    description:
      "Un casque hightech qui créer une bulle autour de vous pour plus de flow lors de vos session coding en toute tranquilité (pour oublier vos enfants, vos amis et votre famille!) ",
    categorie: "Objets",
  },
  {
    name: "Lunettes anti-mal de crâne",
    price: "69.99€",
    image: "../src/assets/lunettes.jpg",
    description:
      "Une monture faites de paracétamol et ses deux verres hightech qui vous protége lors de longue session de coding",
    categorie: "Objets",
  },
  {
    name: "Port USB chauffant",
    price: "19.99€",
    image: "../src/assets/chauffe-cafe-small.png",
    description:
      "Café, thé, infusion, soda ou boisson énergisante: gardez votre boisson au chaud !!",
    categorie: "Objets",
  },
  {
    name: "Lampe luminothérapie",
    price: "175.65€",
    image: "../src/assets/lampe.png",
    description:
      "Sans sortir de votre bureau, gardez un teint radieux et un taux de vitamine D optimal",
    categorie: "Objets",
  },
  {
    name: "Statuette d'Ayoub connectée",
    price: "999.99₿",
    image: "../src/assets/statuette.png",
    description:
      "Bien mieux qu'une IA de coding, avec son choix de plusieurs phrases( ex : Arrête de coder , qu'est ce que tu veux faire ?), ils vous encourage sans vous donner la réponse <3 ",
    categorie: "Objets",
  },
  {
    name: "AlgoritMator",
    price: "5€/mois",
    image: "../src/assets/logo-algo.png",
    description: "Cette aplication vous aidera à résoudre vos algorithme",
    categorie: "Application",
  },
  {
    name: "EasyPressReview",
    price: "Gratuit/mois",
    image: "../src/assets/logo-epr.png",
    description: "Vous aidera à passer un vendredi après-midi plus simple",
    categorie: "Application",
  },
];

function App() {
  const [itemCategorie, setItemCategorie] = useState("");

  return (
    <>
      <nav>
        <Filter
          itemCategorie={itemCategorie}
          setitemCategorie={setItemCategorie}
          itemList={itemList[itemCategorie]}
        />
      </nav>
      <div className="BoxCardList">
        {itemList &&
          itemList.map((s) => (
            <CardList
              key={s.name}
              name={s.name}
              price={s.price}
              image={s.image}
              description={s.description}
              categorie={s.categorie}
            />
          ))}
        {/*  <Description /> */}
      </div>
    </>
  );
}

export default App;
