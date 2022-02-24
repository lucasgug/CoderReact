
import { useState } from "react"
import { configBtns } from "./configBtns"


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

    const {configRestar,configSumar} = configBtns(counter , max ,min , handleRestar, handleSumar) 

    return(
        <div>

            <button {...configRestar }> - </button>

            <span className="mx-3" >{counter}</span>

            <button {...configSumar } > + </button>

        </div>




    )



}