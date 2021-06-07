import react, { Component } from "react"
import "C:/Users/my pc/Desktop/React/FAIZ_WORK/Faiz-React/mp/node_modules/bootstrap/dist/css/bootstrap.css"



class AddEmployee extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list :[],
            firstName: "",
            lastName: "",
            mobileNo: "",
            emailID: "",
            state: "",
            city: "",
            flag: 0,
            index: "",
            firstNameError:"",
            lastNameError:"",
           // usernameValid:false,
            mobileNoError :"",
           // nameError:"",
            emailError:""
            //local :[]
        }
    }

    changeHand = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    
        console.log(event.target.value)
    }

    submitHand = (e) =>{
        if(this.state.emailID.includes("@") && this.state.firstName!="" && this.state.lastName!=""
        && !isNaN(this.state.mobileNo) && this.state.mobileNo.length<11 )
        {
        //let user=this.state.list;
        var user = []
        if(localStorage.getItem("emp")==null){
            user.push({
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                mobileNo:this.state.mobileNo,
                emailID:this.state.emailID,
                state:this.state.state,
                city:this.state.city
            });
            localStorage.setItem("emp",JSON.stringify(user));
        }
        else
        {
            user=JSON.parse(localStorage.getItem("emp"));
            user.push({
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                mobileNo:this.state.mobileNo,
                emailID:this.state.emailID,
                state:this.state.state,
                city:this.state.city,
            });
            localStorage.setItem("emp",JSON.stringify(user));
        }
        this.setState({
            list:JSON.parse(localStorage.getItem("emp")),

            firstName:"",
            lastName:"",
            mobileNo:"",
            emailID:"",
            state:"",
            city:"",
        })
        
        this.props.history.push('./Display');
        e.preventDefault();
    }
    else{
        this.setState({
            emailError:"Incorrect Email",
            mobileNoError:"Only 10 digits are allowed",
            firstNameError:"Mandetory Field",
            lastNameError:"Mandetory Field"

        })
        e.preventDefault();

    }

    }

    render() {
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

                    <br></br><button class="btn btn-primary" onClick={this.submitHand.bind(this)}>Add Employee</button>

                    </div>
                  
<br></br>
                </form>

            </div>




        )
    }



}

export default AddEmployee