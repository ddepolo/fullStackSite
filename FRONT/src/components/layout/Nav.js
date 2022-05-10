import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark topBar">
            <div className="container-fluid">
                <a className="navbar-brand siteLogo" href="#"><img width="150" src="./logo.png" alt="BurgerSite"/></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/productos" className="nav-link">Productos</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contacto" className="nav-link">Contacto</Link>
                    </li>
                
                    <li className="nav-item right">
                        <Link to="/pedidos" className="nav-link">Pedidos</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;