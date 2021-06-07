import react from "react"
import axios from "axios";
import { Component } from "react";



class PostUsingAxious extends Component{

    constructor(props)
    {
        super(props)
       
        this.state = {
            name : "",
            name1 :""
        }
    }

    

    PostData= () =>{
   
    }


    submitHand=(event) =>{
        const {name} = this.state
        axios.post(`https://reqres.in/api/users`,{name}).then(res =>
        {
            console.log(res);
            console.log(res.data);
        }).catch(err=>{
            console.log(err);
        })

    }

    ChangeHand = (event) =>{
        
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render()
    {
        return(
            <div>
                <input type="text" name="name" onChange={this.ChangeHand.bind(this)} value={this.state.name} ></input>
                <button onClick={this.submitHand.bind(this)}>Add</button>
            </div>
        )
    }


}

export default PostUsingAxious