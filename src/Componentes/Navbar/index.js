import React from 'react'
import { Link } from "react-router-dom";
import Menu from "./Menu"
import Logo from '../../imagens/LogoProjeto.png'
// import { Navbar, Nav } from 'react-bootstrap';
import './styles.css'



const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to='/'>
                {''}
                <img className="logo" src={Logo} alt='Logotipo Veg' />

            </Link>
            <Menu />            
        </nav>
    )
}

export default NavBar
