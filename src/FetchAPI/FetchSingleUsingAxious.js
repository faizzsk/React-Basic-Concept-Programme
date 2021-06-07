import react, { Component } from "react"
import axios from "axios"


class FetchSingleUsingAxious extends Component{

    constructor(props)
    {
        super(props)

        this.state={
            user :"",
            name:""
        }
    }

    fetchData=()=>{

        axios.get(`https://reqres.in/api/users/${this.state.name}`)
        .then(response =>{
                this.setState({
                    user : response.data.data
                })
        }).catch(error =>{
            
        })



    }

    changeHand = (event) =>
    {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    render()
    {
        return(

            <div>

                <input type="text" name="name" onChange={this.changeHand.bind(this)} value={this.state.name}></input>
                <button onClick={this.fetchData.bind(this)}>Fetch</button>
                <div>
                    <h1>ID : {this.state.user.id}</h1>
                    <h1>Name : {this.state.user.first_name}</h1>
                </div>
            </div>
        )
    }
}

export default FetchSingleUsingAxious