import react from 'react'
import "C:/Users/my pc/Desktop/React/FAIZ_WORK/Faiz-React/mp/node_modules/bootstrap/dist/css/bootstrap.css"
class DisplayInTable extends react.Component {

    constructor(props) {
        super(props)

        this.state = {
            Firstname: '',
            LastName:'',
            age: '',
             act: 0,
            index: '',
            arr: [],
            errors: {
                Firstname: '',
                LastName: '',
                age: '',
              }
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.del = this.del.bind(this)
    }

    changeHandler = (e) => {
        let errors = this.state.errors;

        // this.setState({

        //     [e.target.name]: e.target.value

        // })
        errors.Firstname = 
        e.target.value.length < 5
          ? 'Full Name must be 5 characters long!'
          : '';

          this.setState({
              errors,[e.target.name]:e.target.value
          }, ()=>
          {
            console.log(errors)

          })
    }

    add = (e, i) => {
        e.preventDefault()

        const { name, age } = this.state

        var list = this.state.arr


        if (this.state.act == 0) {
            list.push({
                Firstname: this.state.Firstname,
                LastName:this.state.LastName,
                age: this.state.age
            })

            this.setState({

                arr: list,
                Firstname: '',
                LastName:'',
                age: '',
                act: 0
            })
        }
        else {
            i = this.state.index
            list[i].Firstname = this.state.Firstname
            list[i].LastName = this.state.LastName
            list[i].age = this.state.age

            this.setState({

                arr: list,
                Firstname: '',
                LastName:'',
                age: '',
                act: 0
            })


        }


        console.log(this.state.arr)


    }

    update = (index, e) => {
        var array = this.state.arr
        array.splice(index, 0)
        this.setState({
            arr: array,
        })

        //  return <button>update</button>
        e.preventDefault()

    }

    tableDisp = () => {
        {this.state.arr.length===0 && <p>daadaDADAD</p>}
        const rows = this.state.arr.map((row, index) => {
            return <tr key={index}>

                <td >{row.Firstname}</td>
                <td >{row.LastName}</td>

                <td>{row.age}</td>
                <td span="2"><button class="btn btn-outline-secondary" onClick={i => this.del(index)}>Delete </button><button class="btn btn-outline-secondary" onClick={i => this.edit(index)}>Edit</button></td>

            </tr>
        })
        return <tbody>{rows}</tbody>

    }

    del = (index) => {
        var array = this.state.arr
        array.splice(index, 1)
        this.setState({
            arr: array,
        })
        console.log(this.state.arr)
    }




    edit = (i) => {

        var array = this.state.arr
        this.setState({

            Firstname: array[i].Firstname,
            LastName:array[i].LastName,
            age: array[i].age,
            act: 1,
            index: i

        })

        // return <button>Update</button>

        //   this.update()




    }
    render() {
        return (
            <div class="form-group">
                <h1>ADD USER</h1>
                <br></br>
                <form onSubmit={this.add.bind(this)}>
                   First Name : <input class="form-control" type="text" value={this.state.Firstname} name="Firstname" onChange={this.changeHandler.bind(this)}></input>
                    <br></br><br>
                    </br>
                     
                    Last Name : <input class="form-control" type="text" value={this.state.LastName} name="LastName" onChange={this.changeHandler.bind(this)}></input>
                    <br></br><br>
                    </br>
                   
                Age : <input class="form-control" type="text" value={this.state.age} name="age" onChange={this.changeHandler.bind(this)}></input>
                            <br></br><br>
                            </br>

                            <button class="btn btn-primary btn-lg btn-block">Add</button>
                            <br></br><br></br>

            </form>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Age</th>

                                    <th scope="col"> ACTION</th>
                                </tr>

                            </thead>
                            {this.tableDisp()}
                        </table>
                    </div>



    )
}

}
export default DisplayInTable