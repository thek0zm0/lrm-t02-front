import './styles.css'

const Navbar = () =>  {
    return (
        <nav className="navbar navbar-expand-md bg-primary main-nav">
        <div className="container-fluid">
          <a href="link" className="nav-logo-text">
            <h4>Healthy Foods</h4>
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav offset-md-2 main-menu">
              <li>
                <a href="link" className='active'>Home</a>
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
  }
  
  export default Navbar;