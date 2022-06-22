import "./styles.css";
import 'bootstrap/js/src/collapse.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <a href="link" className="nav-logo-text">
          <h4>Healthy Foods</h4>
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#hfoods-navbar"
            aria-controls="hfoods-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="hfoods-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <a href="link" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="link">Informações Corporais</a>
            </li>
            <li>
              <a href="link">Dieta</a>
            </li>
            <li>
              <a href="link">Alimentos</a>
            </li>
            <li>
              <a href="link">ADMIN</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
