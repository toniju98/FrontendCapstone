import "./Specials.css";
import GreekSalad from "../assets/greek salad 1.png";
import Delivery from "../assets/Delivery dining.svg";
import { Link } from "react-router-dom";



function MenuItem(){
    return (
      <div className="app__specials-menuItem">
        <img src={GreekSalad} />
        <div className="app__specials-menuItem-text">
          <div className="app__specials-menuItem-titlePrice">
            <h3 className="app__specials-menuItem-title">Greek Salad</h3>
            <h3 className="app__specials-menuItem-price"> $ 12.99</h3>
          </div>
          <p className="app__specials-menuItem-paragraph">
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <div className="app__specials-menuItem-delivery">
            <h3 className="app__specials-menuItem-deliveryText"> Order delivery</h3>
            <img src={Delivery}/>
          </div>
        </div>
      </div>
    );
}

function Specials() {
  return (
    <section className="app__specials">
      <div className="app__specials-header">
        <h2 className="app__specials-header-title">This weeks specials!</h2>
        <Link to="/booking" className="app__specials-header-button">Reserve a table</Link>
      </div>
      <div className="app__specials-main">
      <MenuItem />
      <MenuItem />
      <MenuItem />
      </div>
    </section>
  );
}

export default Specials;
