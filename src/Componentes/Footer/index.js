import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Logo1 from '../../imagens/facebook.jpg'
import Logo2 from '../../imagens/email.png'
import Logo3 from '../../imagens/instagram.jpg'


function Footer () {
    return (
        <footer className="footer-paginas">
            <div>
                <Link to='/'>
                    {''}
                        <div className="redes-sociais">
                            
                            <a href="https://www.facebook.com/">
                                <img className="logo1" src={Logo1} alt='logotipo facebook' />
                            </a>
                            <Link to='/' className="logo2" src={Logo2} href="https://www.google.com › gmail">
                                <img className="logo2" src={Logo2} alt='logotipo carta' />
                            </Link>
                            <Link to='/' className="logo3" src={Logo3} href="https://www.instagram.com/?hl=pt-br">
                                <img className="logo3" src={Logo3} alt='logotipo instagram'/>
                            </Link>
                        </div>
                </Link>
            </div>
        </footer>    
    )
}

export default Footer
