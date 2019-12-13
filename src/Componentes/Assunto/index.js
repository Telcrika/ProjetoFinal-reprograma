import React from 'react'

import './style.css'


function Assunto(props) {
    return (
        // <div className={props.className}>
            <div className="div-conteudo">
                <h1>{props.titulo}</h1>
                <a href="https://www.facebook.com/events/av-paulista-735-bela-vista/natal-vegano-jma-jadore-mes-amis/538016156966651/" target="_blank"><img className="imagem" src={props.name} alt='Convite de Natal'/></a>
               
                {/* <a href="https://www.facebook.com/events/av-paulista-735-bela-vista/natal-vegano-jma-jadore-mes-amis/538016156966651/"/>
                    <img className="imagem" src={props.name} alt='Convite de Natal'/>
                </a> */}
                <p>{props.texto}</p>
            </div>

        // </div>

        
    )
}

export default Assunto