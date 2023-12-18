import "./Footer.css";

import Logo from "../assets/Logo.svg";

function Footer() {
  return (
    <footer className="app__footer">
      <img src={Logo} />
      <div className="app__footer-textMenu">
        <div className="app__footer-navigation">
          <h2 className="app__footer-header">Navigation</h2>
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
            <li>
              <a href="/order-online">Order online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>

        <div className="app__footer-navigation">
          <h2 className="app__footer-header">Contact</h2>
          <ul className="app__footer-subtext">
            <li>
              <a href="/home">Address</a>
            </li>
            <li>
              <a href="/about">Phone Number</a>
            </li>
            <li>
              <a href="/menu">Email</a>
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
