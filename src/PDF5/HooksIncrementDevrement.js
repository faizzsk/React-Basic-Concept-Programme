import react, { useState } from "react"


function HooksIncrementDevrement() {
    const [counter, setCounter] = useState(0);
    const prevnum=0


    


    const incrementCount = () => {

        setCounter(prevnum =>prevnum = prevnum + 1)

    }

    document.title=`${counter}`
    const DCount = () => {

        setCounter(prevnum =>  prevnum = prevnum - 1)

    }

    return (
        <div>
            <input type="text" name="name" value={counter}></input>
            <button onClick={incrementCount}>Increment</button>

            <br></br>

            <input type="text" name="name1" value={counter}></input>
            <button onClick={DCount}>Decrement</button>

            {/* <button onClick={addNum}>Add</button> */}
          
        </div>
    )

}




export default HooksIncrementDevrement