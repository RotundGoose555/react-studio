import "./App.css";
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from './components/BakeryItem';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {

  const [cart, setCart] = useState([]);
  const [total, setCost] = useState(0);
  const updatePrice = () => {
    let sum = 0;
    cart.forEach(i => sum += i.price);
    setCost(sum);
  }
  useEffect(() => {
      updatePrice();
  })

  return (
    <div className="App">
      <h1>Isaac's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div class="wrapper">
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem item={item} key={index} cart={cart} updateCart={setCart} total={total} setCost={setCost}/>
      ))}
      </div>
      <div class="cart">
        <h2>Cart</h2>
            {cart.map((e, i) => <p key={i}>{e.name}</p>)}
            <h4>Total: ${total}</h4>
      </div>
    </div>
  );
}

export default App;
