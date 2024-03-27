import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./App.css";
import FirstPizza from "./components/FirstPizza";
import SecondPizza from "./components/SecondPizza";
import { useState } from "react";
import PopUp from "./components/PopUp";

function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [getFirstOrder, setGetFirstOrder] = useState(null);
  const [getSecondOrder, setGetSecondOrder] = useState(null);
  const orderFunc = () => {
    setShowPopUp(true);
  };

  return (
    <>
      <h1>pizzas</h1>
      <div className="container">
        <FirstPizza setGetFirstOrder={setGetFirstOrder} />
        <SecondPizza setGetSecondOrder={setGetSecondOrder} />
        {showPopUp && (
          <PopUp
            getFirstOrder={getFirstOrder}
            getSecondOrder={getSecondOrder}
            setShowPopUp={setShowPopUp}
          />
        )}
      </div>
      <button className="order" onClick={orderFunc}>
        Заказать
      </button>
    </>
  );
}

export default App;
