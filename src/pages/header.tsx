import { Link } from "react-router-dom";
import "./components/header.css";

function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <h1>LEE COOPER</h1>
        </div>
        <div className="nav">
          <nav className="nav-list">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/collaboration">Collaboration</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
