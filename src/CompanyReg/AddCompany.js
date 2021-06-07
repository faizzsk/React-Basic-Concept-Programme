import react, { Component } from "react"
import "C:/Users/my pc/Desktop/React/FAIZ_WORK/Faiz-React/mp/node_modules/bootstrap/dist/css/bootstrap.css"



class AddCompany extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: [],
            regId: "",
            name: "",

            mobileNo: "",
            emailID: "",
            flag: 0,
            index: "",
            mobileNoError: "",
            // nameError:"",
            emailError: ""
            //local :[]
        }
    }

    changeHand = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    submitHand = (e) => {
        if (this.state.emailID.includes("@")
            && !isNaN(this.state.mobileNo) && this.state.mobileNo.length < 11) {
            //let user=this.state.list;
            var list = []
            if (localStorage.getItem("company") == null) {
                list.push({
                    regId: this.state.regId,
                    name: this.state.name,
                    mobileNo: this.state.mobileNo,
                    emailID: this.state.emailID,
                });
                localStorage.setItem("company", JSON.stringify(list));
            }
            else {
                list = JSON.parse(localStorage.getItem("company"));
                list.push({
                    regId: this.state.regId,
                    name: this.state.name,
                    mobileNo: this.state.mobileNo,
                    emailID: this.state.emailID,
                });
                localStorage.setItem("company", JSON.stringify(list));
            }
            this.setState({
                list: JSON.parse(localStorage.getItem("company")),

                regId: "",
                name: "",
                mobileNo: "",
                emailID: "",

            })

            this.props.history.push('./Display');
            e.preventDefault();
        }
        else {
            this.setState({
                emailError: "Enter Valid Email",
                mobileNoError: "Enter valid mobile"
            })

            e.preventDefault();

        }
    }

    render() {
        return (
            <div>

                <form>
                    <div class="form-group">
                        Registration Id : <input type="text" name="regId" class="form-control" value={this.state.regId} onChange={this.changeHand.bind(this)}></input> <br></br>

                Name : <input type="text" name="name" class="form-control" value={this.state.name} onChange={this.changeHand.bind(this)}></input> <br></br>
               Mobile No  : <input type="text" name="mobileNo" class="form-control" value={this.state.mobileNo} onChange={this.changeHand.bind(this)}></input> <br></br>
                        <p style={{ color: "red" }}>{this.state.mobileNoError}</p>
               Email Id   : <input type="text" name="emailID" class="form-control" value={this.state.emailID} onChange={this.changeHand.bind(this)}></input> <br></br>
                        <p style={{ color: "red" }}>{this.state.emailError}</p>


                        <br></br><button class="btn btn-primary" onClick={this.submitHand.bind(this)}>Add Employee</button>

                    </div>

                    <br></br>
                </form>

            </div>
        )
    }



}

export default AddCompany