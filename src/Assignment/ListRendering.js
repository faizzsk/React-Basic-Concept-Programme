import react, { Component } from 'react'


function ListRendering() {

    const fruits = ["Apple", "Banana", "Orange", "Mango"]

    const k = fruits.map((r)=>{
        return  <h1>{r}</h1>
  })
 
    
    
        return(
            <div><h1></h1>{k}</div>
        )
    



}

export default  ListRendering
