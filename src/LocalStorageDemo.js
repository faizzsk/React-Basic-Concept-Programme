import react, { Component } from 'react'


class LocalStorageDemo extends Component{


    constructor(props)
    {
        super(props)

        this.state ={
            name : "",
            arr:[]
        }
    }

    changeHandler = (event)=>
    {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    add = (event)=>
    {
        const {name,arr} =this.state
        let list = arr
        list.push({
            name:this.state.name
        })

        this.setState({
            arr:list,
            name:""
        })
        localStorage.setItem("data",JSON.stringify(arr))
        event.preventDefault()
    }
    disp = (Event)=>
    {
        
        let arr = JSON.parse(localStorage.getItem("data"))
        

        
        Event.preventDefault()

        console.log(arr)

    }
    render()
    {
        return (
            <form>
                <input type="text" name ="name" value={this.state.name} onChange={this.changeHandler}></input>
                <button onClick={this.add}>Add</button>
                <button onClick={this.disp}>Display</button>
                <table>
<thead>
    <tr>
        <th>name</th>
    </tr>
   </thead>
    {this.disp}

            </table>
            </form>
        )
    }

}
export default LocalStorageDemo