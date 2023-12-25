import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

function Footer() {
  return (
    <footer className="app__footer">
      <Link to="/">
      <img src={Logo}/></Link>
      <div className="app__footer-textMenu">
        <div className="app__footer-navigation">
          <h2 className="app__footer-header">Navigation</h2>
          <ul className="app__footer-subtext">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/order-online">Order online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>

        <div className="app__footer-navigation">
          <h2 className="app__footer-header">Contact</h2>
          <ul className="app__footer-subtext">
            <li>
              <Link to="/home">Address</Link>
            </li>
            <li>
              <Link to="/about">Phone Number</Link>
            </li>
            <li>
              <Link to="/menu">Email</Link>
            </li>
          </ul>
        </div>

        <div className="app__footer-navigation">
          <h2 className="app__footer-header">Social media links</h2>
          <ul className="app__footer-subtext">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
