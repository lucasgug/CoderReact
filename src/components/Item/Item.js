//import { Link } from "@mui/material"
import { green, lightGreen, red } from "@mui/material/colors"
import { color } from "@mui/system"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


export const Item = ( {id, nombre, precio, img, desc,oferta} ) => {

    const precioFinal = oferta ? precio * 0.85 : precio

    return (
        <Card style={{ width: '16rem', margin:'25px'}}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title  >{nombre}</Card.Title>

                { oferta &&
                <>
                <Card.Text>
                    Precio :<del>{precio}</del>   
                </Card.Text>
                
                <Card.Title className="text-danger" >OFERTA 15% OFF!!!</Card.Title>
                
                </>                                              
                }

                <Card.Text>
                    Precio : ${precioFinal}
                   
                </Card.Text>
                <Link to={`/detail/${id}`}  > 
                
                <Button variant="primary" className="container my-2 " >Ver más</Button>
               
                
                </Link>
            </Card.Body>
        </Card>
    )
} 

//<Button variant="success" className="container " >Comprar</Button>

/*<Card.Text>
{desc}
</Card.Text>*/