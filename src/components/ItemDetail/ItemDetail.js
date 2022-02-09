


export const ItemDetail =  ({id,nombre,img,precio,desc,stock,categoria})=>{

    return(
        <div>
            <h3>{nombre}</h3>
            <img src={img} alt={nombre}  />
            <p>{desc}</p>
            <h5>Precio: ${precio}</h5>





        </div>

    )




}