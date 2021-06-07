import react, { Component } from "react"
import axios from "axios"
import "C:/Users/my pc/Desktop/React/FAIZ_WORK/Faiz-React/mp/node_modules/bootstrap/dist/css/bootstrap.css"


class JsonServerFeth extends Component{

    constructor(props)
    {
        super(props)

        this.state={
            user :"",
            name:"",
            email:"",
            list :[]
        }
    }

    fetchData=()=>{

        axios.get(`http://localhost:3009/employees/${this.state.name}`)
        .then(response =>{
                this.setState({
                    user : response.data
                })


        }).catch(error =>{
            
        })



    }

    getUsers = async () => {
        let res = await axios.get(`http://localhost:3009/employees/${this.state.name}`);
        let { data } = res.data;
        this.setState({ user: data });
    };

    fetchAllData=()=>{

        axios.get(`http://localhost:3009/employees/`)
        .then(response =>{
                this.setState({
                    list : response.data
                })
            

              

        }).catch(error =>{
            
        })

        const rows = this.state.list.map((a,index) =>
        {
            console.log(a.firstName)
            console.log(a.lastName)

            return(
                
                     //  <tbody>
                       
                       <tr key ={index}>

                            <td >{a.id}</td>
                               <td >{a.first_name}</td>
                               {/* <td>{a.mobileNo}</td>
                              <td>{a.emailID}</td>
                
                              <td>{a.state}</td>
                              <td>{a.city}</td>
                              */}
                              </tr>
                         //     </tbody>)
            )
        })
        return <tbody>{rows}</tbody>     



    }

    postData =()=>{

        let{name,user,email}=this.state
        name = "Faizzzzzz"
        user = "fizzy"
        email ="fz@gmil.com"
        axios.post(`http://localhost:3009/employees/`,{name,user,email})
        .then(response =>{
            
                this.setState({
                    user : response.data
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

                <form>
                <input type="text" name="id" onChange={this.changeHand.bind(this)} value={this.state.name}></input>
                


                </form>
                <table class="table"> 

            <thead>
                <th>Id</th>
                <th>Name</th>
            </thead>
                {this.fetchAllData()}


                </table>


                <button onClick={this.postData.bind(this)}>Post</button>
                {/* <button onClick={this.fetchAllData.bind(this)}>Fetch All</button> */}
            </div>
        )
    }
}

export default JsonServerFeth 