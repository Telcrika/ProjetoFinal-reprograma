import React from 'react'

import { Link } from 'react-router-dom'

import Menu from './Menu'
import Logo from '../../imagens/LogoProjeto.png'
import './styles.css'

function Navbar () {
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

export default Navbar
