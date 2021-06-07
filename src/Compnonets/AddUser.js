import react, { Component } from 'react'
import "C:/Users/my pc/Desktop/React/FAIZ_WORK/Faiz-React/mp/node_modules/bootstrap/dist/css/bootstrap.css"


class AddUser extends Component{

    constructor(props)
    {
        super(props)

            this.state ={
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                age: '',
             //   salary: '',
                message: null,
                list :[],
                local :"",
                usernameError:"",
                passError:"",
               // usernameValid:false,
                ageError :"",
                nameError:""
            }
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler = (event)=>
    {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    add = (event) =>
    {
        if(this.state.username.length<5 && this.state.username!="" && this.state.password.length<8 &&
        this.state.password!="" && isNaN(this.state.firstName,this.state.lastName))  
        {
           //let user=this.state.list;
           var list = []
           if(localStorage.getItem("user")==null){
               list.push({
                username:this.state.username,
                password:this.state.password,
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                   age:this.state.age,
               });
               localStorage.setItem("user",JSON.stringify(list));
           }
           else
           {
               list=JSON.parse(localStorage.getItem("user"));
               list.push({
                username:this.state.username,
                password:this.state.password,
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                age:this.state.age,
               });
               localStorage.setItem("user",JSON.stringify(list));
           }
           this.setState({
               list:JSON.parse(localStorage.getItem("user")),
   
               username:"",
               password:"",
               firstName:"",
               lastName:"",
               age:"",
            
           })
           
           this.props.history.push('./DisplayData');
           event.preventDefault();
        }
        else{
            this.setState({
                usernameError:" username should  be less than 5 alphabate/digits",
                passError:"incorrect password",
                ageError:"age must be a number",
                nameError:"Please enter name "
            })
            event.preventDefault();

        }

    }
  render()
  {

    return(
        <div class="container">
        <h2 className="text-center">Add User</h2>
        <form >
        <div class="form-group">
            <label class="">User Name:</label>
            <input type="text" placeholder="username" name="username" class="form-control" value={this.state.username} onChange={this.changeHandler}/>
       <p style={{color: "red"}}>{this.state.usernameError}</p>
        </div>

        <div class="form-group">
            <label class="col-sm-2 col-form-label">Password:</label>
            <input type="password"  placeholder="password" name="password" class="form-control" value={this.state.password} onChange={this.changeHandler}/>
            <p style={{color: "red"}}>{this.state.passError}</p>

        </div>

        <div class="form-group">
            <label>First Name:</label>
            <input placeholder="First Name" name="firstName" class="form-control" value={this.state.firstName} onChange={this.changeHandler}/>
        </div>
        <p style={{color: "red"}}>{this.state.nameError}</p>
        <div className="form-group">
            <label>Last Name:</label>
            <input placeholder="Last name" name="lastName" class="form-control" value={this.state.lastName} onChange={this.changeHandler}/>
        </div>
        <p style={{color: "red"}}>{this.state.nameError}</p>

        <div class="form-group">
            <label>Age:</label>
            <input type="number" placeholder="age" name="age" className="form-control" value={this.state.age} onChange={this.changeHandler}/>
        </div>

       
        <button class="btn btn-primary" onClick={this.add.bind(this)}>Save</button>
    </form>
</div>

    )

  }  
}

export default AddUser