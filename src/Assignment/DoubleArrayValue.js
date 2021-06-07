import react from 'react'



function DoubleArrayValue()
{

    const a = [2,3,4,5]

    const b = a.map(i =>{
        return i * i ;
    })
    
return (
    <div><h1>{b}</h1></div>
)
    
}

export default DoubleArrayValue