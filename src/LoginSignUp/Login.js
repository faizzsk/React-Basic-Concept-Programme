import react, { Component } from "react"
import "C:/Users/my pc/Desktop/React/FAIZ_WORK/Faiz-React/mp/node_modules/bootstrap/dist/css/bootstrap.css"

class Login extends Component{

    constructor(props) {
        super(props)
        
        let idx=JSON.parse(localStorage.getItem("index"));
        let list=JSON.parse(localStorage.getItem("signup"));
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
            // firstName:list[idx].firstName,
            // lastName:list[idx].lastName,
            // mobileNo:list[idx].mobileNo,
             emailID:"",
            password:"",
            flag :"",
        //     state:list[idx].state,
        //     city:list[idx].city,
        //     firstNameError:"",
        //     lastNameError:"",
        //    // usernameValid:false,
            mobileNoError :"",
           // nameError:"",
            emailError:""
            
        }


       // this.edit = this.edit.bind(this)
    }

    componentDidMount()
    {
       console.log("in did mount");
       //this.edit()
    }

login = (e) =>{
    var list=JSON.parse(localStorage.getItem("signup"));
    let idx=JSON.parse(localStorage.getItem("index"));

    let emailID     =this.state.emailID;
    let password = this.state.password
    var temp = {emailID,password}

var k=list.length
    for(let i = 0 ; i < list.length ; i++)
    {
        
            if(list[i].emailID == emailID )
            {
                k=list[i]
                break
            }
     
    }


    if( k.password==password)
    {
        alert("alsucessert")
        this.props.history.push('../Home');

    }
    else{
        alert("sorry")
    }
    // list.filter((list)=>{
    //     if(emailID == list.emailID && password == list.password)
    //     {
    //         this.setState({
    //             flag : 1

    //         })
            
    //     }
      
        
    // })

    // if(this.state.flag == 1)
    // {
    //     alert("success")
    // }
    // else{
    //     alert("failed")
    // }
    // if(emailID == emailID && password ==password)
    // {
    //    // this.props.history.push('../DisplayEmp');
    //    alert("Sucess")

    // }
    // else
    // {
    //     alert("wrong Password")
    // }
//     list[idx]=temp;
//     localStorage.setItem("emp",JSON.stringify(list));
//    this.props.history.push('../DisplayEmp');
    e.preventDefault();


  

//   else{
//       this.setState({
//         firstNameError :"incorrect name",
//         lastNameError: "incorrect name",
//         emailError:"Enter Valid Email",
//         mobileNo:"Enter valid mobile number "
//       })

  }
 





signup =()=>{
 this.props.history.push('./SignUp')
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
<h1>Log In</h1>
                <form>
                    <div class="form-group">

                 
               Email Id   : <input type="text" name="emailID" class="form-control" value={this.state.emailID} onChange={this.changeHand.bind(this)}></input> <br></br>
               <p style={{color:"red"}}>{this.state.emailError}</p>

               Password    : <input type="text" name="password" class="form-control" value={this.state.password} onChange={this.changeHand.bind(this)}></input> <br></br>
               <p style={{color:"red"}}>{this.state.emailError}</p>

              
                    <br></br><button class="btn btn-primary" onClick={this.login.bind(this)}> Login </button>
                    <br></br><button class="btn btn-primary" onClick={this.signup.bind(this)}> SignUp </button>

                    </div>
                  
<br></br>
                </form>

            </div>




    )
}
}


export default Login