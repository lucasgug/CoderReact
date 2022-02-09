//import { Link } from "@mui/material"
import { green, lightGreen, red } from "@mui/material/colors"
import { color } from "@mui/system"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


export const Item = ( {id, nombre, precio, img, desc} ) => {

    return (
        <Card style={{ width: '16rem', margin:'25px'}}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title  >{nombre}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text>
                    Precio: ${precio}
                </Card.Text>
                <Link to={`/detail/${id}`}  > 
                
                <Button variant="primary" className="container my-2 " >Ver más</Button>
               
                
                </Link>
            </Card.Body>
        </Card>
    )
} 

//<Button variant="success" className="container " >Comprar</Button>