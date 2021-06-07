import react, { Component, Fragment } from 'react'


   
function MemoDemo({name})
{
    console.log("Rendering.....")

    return(
            <h1>Memo {name}</h1>
    )


}


export default react.memo(MemoDemo)