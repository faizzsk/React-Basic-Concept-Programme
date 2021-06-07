import react, { useState } from "react"


function Greeting ()
{
    const[firstName,setFname] = useState("Faiz")
    const[lastName,setLname] =useState("Shaikh")


    const changefirstName = e =>setFname(e.target.value);
    const changelastName = e => setLname(e.target.value);



    return(
        <div>
<br></br><br>
</br>
            <input type="text" value={firstName} onChange={changefirstName}></input>
            <br></br>
            <input type="text" value={lastName} onChange={changelastName}></input>
            <br></br><br></br>
            <p>Hi........{firstName} {lastName}</p>
        </div>
    )
}

export  default Greeting