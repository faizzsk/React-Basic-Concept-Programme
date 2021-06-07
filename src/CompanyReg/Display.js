import {Component, react  } from "react";
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom'

class Display extends Component{

    constructor(props) {
        super(props)

        // this.state = {
        //     list :[],
        //     firstName: "",
        //     lastName: "",
        //     mobileNo: "",
        //     emailID: "",
        //     state: "",
        //     city: "",
        //     flag: 0,
        //     index: "",
        //     local :[]

              this.setState({
           list : JSON.parse(localStorage.getItem("company"))
     })
       
         }
        // this.editHand = this.editHand.bind(this)
      //  this.edit = this.edit.bind(this,false)
    //  this.delete = this.delete.bind(this)
    


    // edit=(i)=>
    // {
    //     window.localStorage.setItem("id",i)
    // this.props.history.push('./EditEmployee')

    // }

    editHand = (index) => {

        window.localStorage.setItem("index", JSON.stringify(index));
        this.props.history.push(`./EditCompany/${index}`);


      };
    

    tableDisp = (index,event) => {
       var user  = JSON.parse(localStorage.getItem("company")) 
        // this.setState({
        //     local:user
        // })
    //  var user = this.state.list
    //    var arr={...user}
       console.log(user);

        const rows = user.map((a,index) =>
        {
            console.log(a.firstName)
            console.log(a.lastName)

            return(
                
                     //  <tbody>
                       
                       <tr key ={index}>

                            <td >{a.regId}</td>
                               <td >{a.name}</td>
                               <td>{a.mobileNo}</td>
                              <td>{a.emailID}</td>
                           
                              <td>
                                  <button class="btn btn-outline-secondary" onClick={()=>this.editHand(index)}>Edit</button>
                                  <span></span>
                                  <button class="btn btn-outline-secondary" onClick={()=>this.delHandler(index)}>Delete</button>
                              </td>
                              </tr>
                         //     </tbody>)
            )
        })
return <tbody>{rows}</tbody>
      }



// delete = index =>{
//     var temp = JSON.parse(localStorage.getItem("emp"))


//     temp.splice(index,1)
//     // this.setState({
//     //     local : temp
//     // })
// }

delHandler = (index) => {
    const confirm = window.confirm("Are you sure ?");
    if (confirm) {
      let list = JSON.parse(localStorage.getItem("company"));
      list.splice(index, 1);
      this.setState({
        list: list,
      });
      localStorage.setItem("company", JSON.stringify(list));
    }
  };


render()
{
    return (<div>
        
            <table class="table table-striped" >
                <thead class="thead-dark">
                    <tr>
                        <th>Reg Id</th>
                        <th>Name</th>
                        <th>Mobile No</th>
                        <th>Email ID</th>

                        <th>Action</th>
                    </tr>
                </thead>
 {/* <tbody>
            {this.state.list.map((a, index) => {
              return (
                <tr key={index}>
                  <td>{a.firstName}</td>
                  <td>{a.lastName}</td>
                  <td>{a.emailID}</td>
                  <td>{a.MobileNo}</td>
                  <td>{a.state}</td>
                  <td>{a.city}</td>
                  <td>
                   
                    <button onClick={() => this.editHandler(index)}>
                      Edit
                    </button>

                    <button onClick={() => this.delHandler(index)} >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody> */}
          {this.tableDisp()}
            </table>
        
        
        
        
        </div>
    )

    }
}
export default Display