import react, { Component } from "react"
import DisplayData from './DisplayData'
class EditUserComponent extends Component{
    User;
    constructor(props){

        let idx=JSON.parse(localStorage.getItem("index"));
        let list=JSON.parse(localStorage.getItem("user"));
      
        super(props);
        this.state ={
            username: list[idx].username,
            password: list[idx].password,
            firstName: list[idx].firstName,
            lastName: list[idx].lastName,
            age: list[idx].age,
            message: null,
            list :[],
            local :"",
            usernameError:" ",
            passError:"",
            ageError:"",
            nameError:""

        
        }
       //this.saveUser = this.saveUser.bind(this);
       this.edit = this.edit.bind(this);

    }

    componentDidMount() {

      //  this.loadUser();
      // this.loadUser(e);
        //   e.preventDefault()
      //  this.edit()
    }

    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

    // loadUser(e) {

    //   //  this.tableDisp()
    
    //   var user  = JSON.parse(localStorage.getItem("data")) 
    //             console.log(user);
    //             console.log(user.values())

    //             console.log(user.firstName)
    //             if(localStorage.getItem("data"))
    //             {
    //                 this.setState({
    //                     id: user.id,
    //                     firstName: user.firstName,
    //                     lastName: user.lastName,
    //                     age: user.age,
    //                     salary: user.salary
                      
    //                 })
    //             }
    //         }

    

    edit = () =>{

        if(this.state.username.length<5 && this.state.username!="" && this.state.password.length<8 &&
        this.state.password!="" && isNaN(this.state.firstName,this.state.lastName))
        {
        var list=JSON.parse(localStorage.getItem("user"));
        let idx=JSON.parse(localStorage.getItem("index"));
    
        let username        =this.state.username;
        let firstName         =this.state.firstName;
        let lastName    =this.state.lastName;
        let age     =this.state.age;
        let password=this.state.password;

        var temp = {username,password,firstName,lastName,age}
        console.log(temp);
        
        list[idx]=temp;
        localStorage.setItem("user",JSON.stringify(list));
       // e.preventDefault();
       // in Relative url working :
       // current location : /a/b/c => push(./z) navigates to /a/b/z
       // current location : /a/b/c => push(../z) navigates to /a/z
       // current location : /a/b/c => push(../../z) navigates to /z
        this.props.history.push('../DisplayData');
        }
        else{
            this.setState({
                usernameError:" username should  be less than 5 alphabate/digits",
                passError:"incorrect password",
                ageError:"age must be a number",
                nameError:"Number not allowed"
            })
         //   event.preventDefault();

       }    
    
    
    
    }
    




 
    render() {
        return (
            <div class="container">
        <h2 className="text-center">Edit User</h2>
        <form >
        <div class="form-group">
            <label class="">User Name:</label>
            <input type="text"   placeholder="username" name="username" class="form-control" value={this.state.username} onChange={this.onChange.bind(this)}/>
       <p style={{color: "red"}}>{this.state.usernameError}</p>
        </div>

        <div class="form-group">
            <label class="col-sm-2 col-form-label">Password:</label>
            <input type="password"  placeholder="password" name="password" class="form-control" value={this.state.password} onChange={this.onChange.bind(this)}/>
            <p style={{color: "red"}}>{this.state.passError}</p>

        </div>

        <div class="form-group">
            <label>First Name:</label>
            <input placeholder="First Name" name="firstName" class="form-control" value={this.state.firstName} onChange={this.onChange.bind(this)}/>
        </div>
        <p style={{color: "red"}}>{this.state.nameError}</p>
        <div className="form-group">
            <label>Last Name:</label>
            <input placeholder="Last name" name="lastName" class="form-control" value={this.state.lastName} onChange={this.onChange.bind(this)}/>
        </div>
        <p style={{color: "red"}}>{this.state.nameError}</p>

        <div class="form-group">
            <label>Age:</label>
            <input type="number" placeholder="age" name="age" className="form-control" value={this.state.age} onChange={this.onChange.bind(this)}/>
        </div>

       
        <button class="btn btn-primary" onClick={this.edit.bind(this)}>Update</button>
    </form>
</div>

        );
    }
}









export default EditUserComponent;
