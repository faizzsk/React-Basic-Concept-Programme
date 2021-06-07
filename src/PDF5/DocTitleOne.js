/* import React, { useState, useEffect } from 'react'

function DocTitleOne() {
    const [count, setcount] = useState(0);
    useEffect(() => {
        document.title=`count-${count}`
        
    }, [count])
    return (
        <div>
            <button onClick={()=>setcount(count+1)}>Count- {count}</button>
        </div>
    )
}

export default DocTitleOne */ 

//custom hook

import React, { useState, useEffect } from 'react'
import useDocumentTitle from './useDocumentTitle';

function DocTitleOne() {
    const [count, setcount] = useState(10);
    useDocumentTitle(count);
    /*  const disp=()=>{
        useDocumentTitle(count);
    } */ 
    
    return (
        <div>
            <button onClick={()=>setcount(count+1)}>Count- {count}</button>
           
        </div>
    )
}

export default DocTitleOne
 
