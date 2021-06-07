import react, { Component } from "react"
import "C:/Users/my pc/Desktop/React/FAIZ_WORK/Faiz-React/mp/node_modules/bootstrap/dist/css/bootstrap.css"

class EditEmployee extends Component{

    constructor(props) {
        super(props)
        
        let idx=JSON.parse(localStorage.getItem("index"));
        let list=JSON.parse(localStorage.getItem("emp"));
        // console.log(idx);
        // this.state ={
        //     firstName:"",
        //     lastName:"",
        //     mobileNo:"",
        //     emailID:"",
        //     state:"",
        //     city:""

        // }
        this.state = {
            firstName:list[idx].firstName,
            lastName:list[idx].lastName,
            mobileNo:list[idx].mobileNo,
            emailID:list[idx].emailID,
            state:list[idx].state,
            city:list[idx].city,
            firstNameError:"",
            lastNameError:"",
           // usernameValid:false,
            mobileNoError :"",
           // nameError:"",
            emailError:""
            
        }


        this.edit = this.edit.bind(this)
    }

    componentDidMount()
    {
       console.log("in did mount");
       //this.edit()
    }

edit = (e) =>{
    if(this.state.emailID.includes("@") && this.state.firstName!="" && this.state.lastName!=""
    && !isNaN(this.state.mobileNo) && this.state.mobileNo.length<11 )
  {
    var list=JSON.parse(localStorage.getItem("emp"));
    let idx=JSON.parse(localStorage.getItem("index"));

    let firstName   =this.state.firstName;
    let lastName    =this.state.lastName;
    let mobileNo    =this.state.mobileNo;
    let emailID     =this.state.emailID;
    let state       =this.state.state;
    let city                =this.state.city;

    var temp = {firstName,lastName,mobileNo,emailID,state,city}
    console.log(temp);
    
    list[idx]=temp;
    localStorage.setItem("emp",JSON.stringify(list));
   this.props.history.push('../DisplayEmp');
    e.preventDefault();


  }

  else{
      this.setState({
        firstNameError :"incorrect name",
        lastNameError: "incorrect name",
        emailError:"Enter Valid Email",
        mobileNo:"Enter valid mobile number "
      })

  }
 



}

changeHand = (event) => {
    
    this.setState({
        [event.target.name]: event.target.value
    })
    console.log(event.target.value)
}

render()
{
       return (
        <div>

                <form>
                    <div class="form-group">

                    First Name : <input type="text" name="firstName" class="form-control" value={this.state.firstName} onChange={this.changeHand.bind(this)}></input> <br></br>
                    <p style={{color:"red"}}>{this.state.firstNameError}</p>

               Last Name  : <input type="text" name="lastName" class="form-control" value={this.state.lastName} onChange={this.changeHand.bind(this)}></input> <br></br>
               <p style={{color:"red"}}>{this.state.lastNameError}</p>

               Mobile No  : <input type="text" name="mobileNo" class="form-control" value={this.state.mobileNo} onChange={this.changeHand.bind(this)}></input> <br></br>
               <p style={{color:"red"}}>{this.state.mobileNoError}</p>

               Email Id   : <input type="text" name="emailID" class="form-control" value={this.state.emailID} onChange={this.changeHand.bind(this)}></input> <br></br>
               <p style={{color:"red"}}>{this.state.emailError}</p>

                State : <select name="state" id="state" class="form-control" value={this.state.state} onChange={this.changeHand.bind(this)}>
                <option value=""> Select</option>

                        <option value="Aasam"> Aasam</option>
                        <option value="Maharshtra" >Maharshtra</option>
                        <option value="Gujrat">Gujrat</option>
                        <option value="Rajsthan"> Rajsthan</option>
                    </select>
                    <br></br><br></br>

                City :  <select name="city" id="city" class="form-control" value={this.state.city}onChange={this.changeHand.bind(this)}>
                 <option value=""> Select</option>

                        <option value="nashik"> Nashik</option>
                        <option value="surat" >Surat</option>
                        <option value="jaipur">Jaipur</option>
                        <option value="aasaam"> Assam</option>
                    </select>

                    <br></br><button class="btn btn-primary" onClick={this.edit.bind(this)}>Update Employee</button>

                    </div>
                  
<br></br>
                </form>

            </div>




    )
}
}


export default EditEmployee