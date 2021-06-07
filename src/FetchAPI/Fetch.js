import react from "react"
import axios from "axios"

class Fetch extends react.Component{

    state = {
        users : [],
        isLoad : true,
        error :""
    }



    FetchData = ()=>{


        fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => this.setState({
      users : data,
      isLoad: false
  })
  ).catch(error=>this.setState({
      error, isLoad:false
  }))
    }

 
componentDidMount()
{
    this.FetchData()
}

render()
{
    console.log(this.state.users);
    
    const {users,isLoad,error}=this.state

    return(
        <div>
{error ? <p>{error.message}</p> : null}

{!isLoad ?
(
        users.map(user =>{
            return(
                
                <div key={user.id}>
                  <h6>{user.name}</h6>
                    <h6>{user.email}</h6>
                </div>
            )
        })
):<h1>Loading.........</h1>}

<h1></h1>
        <button onClick={this.FetchData.bind(this)}>CLick Me</button>


        </div>
    )
}


    


}

export default Fetch