import React from 'react'

import './style.css'

function Assunto(props) {
    return (
        // <div className={props.className}>
            <div className="div-conteudo">
                <h1>{props.titulo}</h1>,
                <img className="imagem" src={props.name} alt=''/>,
                <p>{props.texto}</p>,
            </div>

        // </div>

        
    )
}

export default Assunto