import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import Logo from '../../imagens/LogoProjeto.png'

function Navbar () {
    return (
        <nav className="navbar">
            <div>
                <Link to='/'>
                    {''}
                    <img className="logo" src={Logo} alt='Logotipo Veg' />
                </Link>
                
            </div>
        </nav>
    )
}

export default Navbar
