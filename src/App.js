import {useRef, useState, useEffect} from "react"
import CarouselCard from "./components/CarouselCard"
import CarouselPagination from "./components/CarouselPagination"

import Img1 from "./assets/images/img1.jpg"
import Img2 from "./assets/images/img2.jpg"
import Img3 from "./assets/images/img3.jpg"
import Img4 from "./assets/images/img4.jpg"

let cards = [
  {
    name: "NAME",
    image: Img1
  },
  {
    name: "NAME",
    image: Img2
  },
  {
    name: "NAME",
    image: Img3
  },
  {
    name: "NAME",
    image: Img4
  },
];

function App() {
  let cardsContainer = useRef(0);
  let [initCard, setInitCard] = useState(1)

  useEffect(() => {
    // activate current card
    // deactivate the others
    for (let i=0; i<cardsContainer.current.children.length; i++) {
      let item = cardsContainer.current.children[i];

      if (i==initCard)
        item.classList.add("active");
      else
        item.classList.remove("active");
    }

    // change background
    let img = cards[initCard].image;
    let carouselBgPanel = document.querySelector(".carousel__background-panel")

    carouselBgPanel.style.backgroundImage = `url(${img})`;
    carouselBgPanel.style.backgroundSize= "cover";
  }, [initCard])
  return (
    <div className="App">
      <div class="carousel__background-panel">
      </div>

      <div class="carousel__cards">
        <div class="container" ref={cardsContainer}>
          {cards.map((item, i) => {
            return <CarouselCard
                      name={item.name}
                      image={item.image}
                   />
          })}
        </div>

        <CarouselPagination
          init={initCard}
          setInitCard={setInitCard}
          length={cards.length}
          pagesContainer={cardsContainer}
          pageRatio="0.5"
        />
      </div>
    </div>
  );
}

export default App;
