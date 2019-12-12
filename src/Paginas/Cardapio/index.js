import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import data from '../../Json/data.json'


function Cardapio(props) {
    console.log(data.restaurantes)
    return (
        <div className="teste">
        {
            data.restaurantes.map(rest => (
                <Card key={rest.id} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{rest.nome}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{rest.regiao}</Card.Subtitle>
                        <Card.Text>
                        {rest.descrição}
                        </Card.Text>
                        <Card.Link href="#">{rest.site}</Card.Link>
                    </Card.Body>
                </Card>
            ))
        }
        </div>
    )
}

const restaurante = () => (
    <div>
        {data.map.regiao(item => {
            console.log(item)
        })}
    </div>
)

export default Cardapio