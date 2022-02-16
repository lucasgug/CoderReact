
import { useState } from "react"


export const ItemCount =({ max, min=0 ,counter,setCounter })=>{

    
    
    //controlador de evento
    const handleSumar = ()=>{
       counter < max && setCounter(counter + 1 )
    }

    //controlador de evento
    const handleRestar = ()=>{
      counter > min &&  setCounter(counter - 1 )
      //si se cumple que counter > min  (ENTONCES)&& el setcounter resta 1
    }

    return(
        <div>

            <button className="btn btn-outline-primary" onClick={handleRestar}> - </button>
            <span className="mx-3" >{counter}</span>
            <button className="btn btn-primary" onClick={handleSumar} > + </button>

        </div>




    )



}