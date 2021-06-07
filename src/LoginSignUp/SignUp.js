import react, { Component } from "react"
import "C:/Users/my pc/Desktop/React/FAIZ_WORK/Faiz-React/mp/node_modules/bootstrap/dist/css/bootstrap.css"



class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list :[],
            firstName: "",
            lastName: "",
            mobileNo: "",
            emailID: "",
            password:"",
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
        if(localStorage.getItem("signup")==null){
            user.push({
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                mobileNo:this.state.mobileNo,
                emailID:this.state.emailID,
                password:this.state.password
            });
            localStorage.setItem("signup",JSON.stringify(user));
        }
        else
        {
        
            user=JSON.parse(localStorage.getItem("signup"));
            user.push({
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                mobileNo:this.state.mobileNo,
                emailID:this.state.emailID,
                password:this.state.password

            });
            localStorage.setItem("signup",JSON.stringify(user));
        }
        this.setState({
            list:JSON.parse(localStorage.getItem("signup")),

            firstName:"",
            lastName:"",
            mobileNo:"",
            emailID:"",
            password:""
        })
        
        this.props.history.push('./Login');
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
<h1>Sign Up</h1>
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
               Password :  <input type="text" name="password" class="form-control" value={this.state.password} onChange={this.changeHand.bind(this)}></input> <br></br>
            
                    <br></br><button class="btn btn-primary" onClick={this.submitHand.bind(this)}>Sign Up</button>

                    </div>
                  
<br></br>
                </form>

            </div>




        )
    }



}

export default SignUp