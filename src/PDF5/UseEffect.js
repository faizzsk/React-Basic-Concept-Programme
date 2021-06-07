import react, { useEffect, useState } from "react"




function UseEffectDemo()
{

    const [count , setCount] = useState(0)


    useEffect(()=>{
        console.log("in use effect");

        document.title = `${count} times`
    },[])//[] work as component did mount...render only once when loaded

    const counter = ()=>(setCount(count+1))

    useEffect(()=>{
        console.log("in use effect");

        document.title = `${count} times`
    },[count])//[] ...render when updated = componentDidUpdate

return (
    <div>
        <input type="text" name="name" value={count}></input>
        <button onClick={counter}>Click</button>
    </div>
)
}

export default UseEffectDemo