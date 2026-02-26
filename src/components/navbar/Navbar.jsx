import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar({ setView }) {
  return (
    <nav className="navbar">
      <h2 className="logo">
        Comm<span>Gym</span>
      </h2>

      <div className="nav-links">
        <button onClick={() => setView("home")}>Home</button>
        <button onClick={() => setView("about")}>About</button>
      </div>

      <Link
        to="/login"
        className="login-btn"
      >
        Login
      </Link>
    </nav>
  );
}

export default Navbar;