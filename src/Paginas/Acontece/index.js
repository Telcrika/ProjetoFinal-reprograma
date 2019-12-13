import React from 'react'
import Convite from '../../imagens/eventoVeg.jpg'
import './styles.css'
import Assunto from '../../Componentes/Assunto'
// import { getBsProps } from 'react-bootstrap/lib/utils/bootstrapUtils'


function Acontece () {
    return (
        
        <main className='acontece'>

            <Assunto
                titulo='Festa de Natal'
                name={Convite}
                texto=''
                
            />

        </main>
    )
}

export default Acontece