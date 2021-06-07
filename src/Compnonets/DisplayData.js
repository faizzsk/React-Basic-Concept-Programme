import react, { Component } from 'react'
import AddUser from './AddUser'
import EditUserComponent from './EditUserComponent';

class DisplayData extends Component{

    constructor(props)
    {
        super(props)
    }
    componentDidMount() {

        this.tableDisp();
       // this.del = this.del.bind(this)

    }
    // del = (index) => {
    //   //  var array = this.state.arr
    //     //const array = JSON.parse(localStorage.getItem("data"))
    //     const array = this.state.list
    //     array.splice(index, 1)
    //     this.setState({
    //         list: array
    //     })
    //   //  console.log(this.state.arr)
    // }


    tableDisp = (index) => {
        var user  = JSON.parse(localStorage.getItem("user")) 
       // var arr={...user}
       
        const rows = user.map((a,index) =>{
         //   console.log(a.username)
            return(
                     //  <tbody>
                       
                       <tr key ={index}>

                            <td >{a.username}</td>
                               <td >{a.password}</td>
                               <td>{a.firstName}</td>
                              <td>{a.lastName}</td>
                
                              <td>{a.age}</td>
                              <td>
                                  <button class="btn btn-outline-secondary" onClick={()=>this.editHand(index)}>Edit</button>
                                  <span></span>
                                  <button class="btn btn-outline-secondary" onClick={()=>this.delHandler(index)}>Delete</button>
                              </td>
                              </tr>
                         //     </tbody>)
            )
        })

    //    for(let arr of user)
    //     {
    //        return(
    //        <tbody>
           
    //        <tr key={index}>
    //             <td >{arr.username}</td>
    //                <td >{arr.password}</td>
    //                <td>{arr.firstName}</td>
    //               <td>{arr.lastName}</td>
    
    //               <td>{arr.age}</td>
    //               <td>{arr.salary}</td>
    //               </tr>
    //               </tbody>)
    //     }


    //     const rows = user.foreach((row, index) => {
    //         return <tr key={index}>

    //             <td >{row.username}</td>
    //             <td >{row.password}</td>
    //             <td>{row.firstName}</td>
    //             <td>{row.lastName}</td>

    //             <td>{row.age}</td>
    //             <td>{row.salary}</td>

    //         //message: this.state.message,
         
    //             <td span="2"><button class="btn btn-outline-secondary" onClick={i => this.del(index)}>Delete </button><button class="btn btn-outline-secondary" onClick={i => this.edit(index)}>Edit</button></td>

    //         </tr>
    //     })
         {rows==0 &&    (<p style={{color:"Red",fontSize:19,textAlign:"center"}}>No DATA</p>)}

         return <tbody>{rows}</tbody>
    }
    editHand = (i) => {

    //     const array = JSON.parse(localStorage.getItem("data"))
    // // var array = this.state.list
    //  console.log(array[i].username)
    //     this.setState({

    //         username: array[i].username,
    //         password: array[i].password,
    //         firstName: array[i].firstName,
    //         lastName: array[i].lastName,
    //         age: array[i].age,
    //         salary: array[i].salary,
    //        // message: null,
    //         //list :[],
    //      //   local :""
        
    //     })
    window.localStorage.setItem("index", JSON.stringify(i));
        this.props.history.push(`./EditUserComponent/${i}`);

    }
   
    delHandler = (index) => {
        const confirm = window.confirm("Are you sure ?");
        if (confirm) {
          let list = JSON.parse(localStorage.getItem("user"));
          list.splice(index, 1);
          this.setState({
            list: list,
          });
          localStorage.setItem("user", JSON.stringify(list));
        }
      };
    
    // del = i =>
    // {
    //     var arr = JSON.parse(localStorage.getItem("user"))
    //     arr.splice(i,1)
        
    //     localStorage.setItem("user",JSON.stringify(arr))
    //     console.log(arr)
    // }
    render()
    {
        return (
            <div>
            <table class="table">

                <thead>
                    <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Password</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last NAme</th>
                    <th scope="col">Age</th>
            <th scope="col">Action</th>
                    </tr>
                </thead>
                {this.tableDisp()}
            </table>

</div>


        )
    }

}

export default DisplayData