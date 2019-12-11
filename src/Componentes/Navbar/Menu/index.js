import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Menu () {
    return (
        
        <div className="menu-opcoes">
          <Link to='/' className='opcao'>
            Home
          </Link>
          <Link to='/Cardapio' className='opcao'>
            Cardapio
          </Link>
          <Link to='/Acontece' className='opcao'>
            Acontece
          </Link>
      </div>
      
    ) 

}      

export default Menu