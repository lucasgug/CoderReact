import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router"
import { db } from "../../firebase/config"
import { collection ,getDocs , query ,where} from "firebase/firestore"

 
export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    console.log(productos)

    const {catId} = useParams()

   
   

    useEffect( () => {
        setLoading(true)
        //db lo exporto desde config.js
        
        //1ro armo referencia
        const productosRef = collection( db,'productos' )
        const q = catId ? query(productosRef, where("categoria","==",catId)) : productosRef
        //2do pedir ref
       getDocs(q) 
            .then((resp) => {
           setProductos(resp.docs.map((doc) => {
               return{

                   id : doc.id,
                   ...doc.data()

               }
           })) 
        })
        .finally(() => {
            setLoading(false)
        })

    }, [catId])

    return (
        <>
           <h2 className="container ">{catId}</h2>
            <hr/>

            {
                loading 
                    ? <h2>Loading...</h2> 
                    : <ItemList productos={productos}/>
            } 
        </>
    )
}










