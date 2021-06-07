import react, { Component } from 'react'
import reactDom from 'react-dom'



function ErrorBoundary({name})
{
    if(name==="Faiz")
    {
        throw new  Error("Not A Hero")
    }

    return <h1>{name}</h1>
}

export default  ErrorBoundary

