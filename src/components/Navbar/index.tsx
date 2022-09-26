import "./styles.css";
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import history from "util/history";
import { AuthContext } from "AuthContext";
import { getTokenData, isAuthenticated } from "util/auth";
import { removeAuthData } from "util/storage";

const Navbar = () => {

  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
      authenticated: true,
      tokenData: getTokenData()
    })}
    else {
      setAuthContextData({
        authenticated: false
      })
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false
    });
    history.replace('/');
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>Healthy Foods</h4>
        </Link>
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
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
            <NavLink to="/body-info" activeClassName="active">Informações Corporais</NavLink>
            </li>
            <li>
            <NavLink to="/diet" activeClassName="active">Dieta</NavLink>
            </li>
            <li>
            <NavLink to="/foods" activeClassName="active">Alimentos</NavLink>
            </li>
            <li>
            <NavLink to="/admin" activeClassName="active">ADMIN</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-login-logout">
          {
            authContextData.authenticated
            ? (
            <>
            <span className="nav-username">{authContextData.tokenData?.user_name}</span>
            <a href="#logout" onClick={handleLogoutClick}>Logout</a>
            </>)
            : (<Link to="/admin/auth">Login</Link>)
          }
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
