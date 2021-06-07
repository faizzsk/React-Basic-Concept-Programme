import react, { Component } from "react"
import axios from "axios"

class FetchSingleData extends Component {

    constructor(props) {
        super(props)
        this.state = {

            users: [],
            error: "",
            isLoad:true,
            name:""

        }
    }

    componentDidMount() {
        //this.FetchData()
    }
    FetchData = ()=>{


        fetch(`https://jsonplaceholder.typicode.com/users/${this.state.name}`)
  .then(response => response.json() )
  .then(data => this.setState({
      users : data,
      isLoad: false
  })
  ).catch(error=>this.setState({
      error, isLoad:false
  }))


    }

changeHand = (event)=>{
    this.setState({

        [event.target.name] : event.target.value

    })

}

    render() {
        console.log(this.state.users.email)

        return (
            <div>
                <h1>Name : {this.state.users.name}</h1>
                <h1>Email :{this.state.users.email}</h1>
                <input type="text" name="name" value={this.state.name} onChange={this.changeHand.bind(this)}></input>
            <button onClick={this.FetchData.bind(this)}>Data</button>
            </div>
        )
    }

}

export default FetchSingleData