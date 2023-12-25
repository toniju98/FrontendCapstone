import "./Hero.css";
import { Link } from "react-router-dom";

import exampleImage from '../assets/restauranfood 1.png';

function Hero() {
  return (
    <section className="app__hero">
      <div className="app__hero-content">
        <div className="app__hero-textButton">
          <div className="app__hero-text">
            <p className="app__hero-header">Little Lemon</p>
            <p className="app__hero-subheader">Chicago</p>
            <p className="app__hero-paragraph">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist,
            </p>
          </div>
          <Link to="/booking" className="app__hero-button">Reserve a table</Link>
        </div>
        <img src={exampleImage} />
      </div>
    </section>
  );
}

export default Hero;
