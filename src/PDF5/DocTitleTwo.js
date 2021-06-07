import React, { useState, useEffect } from 'react'
import useDocumentTitle from './useDocumentTitle';

function DocTitleTwo() {
    const [count, setcount] = useState(0);
    useDocumentTitle(count);
    
    return (
        <div>
            <button onClick={()=>setcount(count+1)}>Count- {count}</button>
        </div>
    )

}

export default DocTitleTwo
