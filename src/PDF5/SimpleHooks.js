import react, { useState } from "react"


function SimpleHooks() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Fatima")
    const [state,setState] = useState(true)
    const [Add,setNum] = useState([0])


    const addNum =()=>{
        setNum(Add =>{
              return  [...Add,Math.abs(Math.random())]
        }
        )
    }

    const changeState =()=>{
        setState(true)
        console.log(state);
    }

    const changeName = () => {
        setName("Faiz ")
    }


    const changeCount = () => {

        setCounter(
            (counter + 1)
        )

    }

    return (
        <div>
            <input type="text" name="name" value={counter}></input>
            <button onClick={changeCount}>Increment</button>

            <br></br>

            <input type="text" name="name1" value={Add}></input>
            <button onClick={changeName}>changeName</button>

            <button onClick={addNum}>Add</button>
            <ul>
                {Add.map((num)=>(
                <li  key={Add}>{Add}</li>

                ))}
            </ul>
        </div>
    )

}




export default SimpleHooks