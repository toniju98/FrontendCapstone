import "./Navbar.css";
import Logo from "../assets/Logo.svg";

function Navbar() {
  return (
    <nav className="app__navbar">
      <img src={Logo} />
        <ul className="app__navbar-navlinks">
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
    </nav>
  );
}

export default Navbar;
