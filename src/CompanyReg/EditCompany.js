import react, { Component } from "react"
import "C:/Users/my pc/Desktop/React/FAIZ_WORK/Faiz-React/mp/node_modules/bootstrap/dist/css/bootstrap.css"

class EditCompany extends Component {

    constructor(props) {
        super(props)

        let idx = JSON.parse(localStorage.getItem("index"));
        let list = JSON.parse(localStorage.getItem("company"));
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
            regId: list[idx].regId,
            name: list[idx].name,
            mobileNo: list[idx].mobileNo,
            emailID: list[idx].emailID,
            mobileNoError: "",
            // nameError:"",
            emailError: ""

        }


        // this.edit = this.edit.bind(this)
    }

    componentDidMount() {
        console.log("in did mount");
        //this.edit()
    }

    edit = () => {
        if (this.state.emailID.includes("@")
            && !isNaN(this.state.mobileNo) && this.state.mobileNo.length < 11) {
            var list = JSON.parse(localStorage.getItem("company"));
            let idx = JSON.parse(localStorage.getItem("index"));

            let regId = this.state.regId;
            let name = this.state.name;
            let mobileNo = this.state.mobileNo;
            let emailID = this.state.emailID;

            var temp = { regId, name, mobileNo, emailID, }
            console.log(temp);

            list[idx] = temp;
            localStorage.setItem("company", JSON.stringify(list));
            // e.preventDefault();

            this.props.history.push('../Display');
            console.log(this.props.history);
        }
        else {
            this.setState({
                emailError: "Enter Valid Email",
                mobileNo: "Enter valid mobile"
            })
        }
       



    }

    changeHand = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    render() {
        return (
            <div>

                <form>
                    <div class="form-group">
                        Registration Id : <input type="text" name="id" class="form-control" value={this.state.regId} onChange={this.changeHand.bind(this)}></input> <br></br>

        Name : <input type="text" name="name" class="form-control" value={this.state.name} onChange={this.changeHand.bind(this)}></input> <br></br>
                        <p style={{ color: "red" }}>{this.state.mobileNoError}</p>

       Mobile No  : <input type="text" name="mobileNo" class="form-control" value={this.state.mobileNo} onChange={this.changeHand.bind(this)}></input> <br></br>
                        <p style={{ color: "red" }}>{this.state.mobileNoError}</p>

       Email Id   : <input type="text" name="emailID" class="form-control" value={this.state.emailID} onChange={this.changeHand.bind(this)}></input> <br></br>
                        <p style={{ color: "red" }}>{this.state.emailError}</p>


                        <br></br><button class="btn btn-primary" onClick={this.edit.bind(this)}>Update</button>

                    </div>

                    <br></br>
                </form>

            </div>

        )
    }


}


export default EditCompany