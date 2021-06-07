import react from 'react'


class AddUser extends react.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: "",
            name: "",
            email: "",
            pass: "",
            res: []
        }
        this.changeHandler = this.changeHandler.bind(this)

    }




    changeHandler = (e) => {

        // const key = e.target.name;
        // const val = e.target.val;

        // this.setState({
        //     [key]:val

        // });
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
        e.preventDefault()
    }


    add(E) {
        // console.log(JSON.stringify(this.state));
        var listt = this.state.res
        listt.push({

            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            pass: this.state.pass

        })

        this.setState({
            res: listt,
            id: "",
            name: "",
            email: "",
            pass: "",

        })

        console.log(this.state.res)

        E.preventDefault();


    }

    Tbody = () => {
        const rows = this.state.res.map((row, index) => {

            return (
                <tr key={index}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.pass}</td>
                </tr>
            )


        })

        return <tbody>{rows}</tbody>
    }

    delete(i) {
        let arr = this.state.res;
        arr.splice(1, i)
        this.setState({
            res: arr
        })
    }


    render() {
        const { id, name } = this.state;

        return (<div> <form onSubmit={this.add.bind(this)}>

            <label> Enter Id
            <input type="text" name='id' value={id} onChange={this.changeHandler.bind(this)}></input>
            </label>

            <br></br>
            <label> Enter Name
            <input type="text" name='name' value={this.state.name} onChange={this.changeHandler.bind(this)}></input>
            </label>
            <br></br>
            <label>Enter Email
            <input type="text" name='email' value={this.state.email} onChange={this.changeHandler.bind(this)}></input>
            </label>
            <br></br>
            <label>Enter Password
            <input type="Password" name='pass' value={this.state.pass} onChange={this.changeHandler.bind(this)}></input>
            </label>
            <br></br><br>
            </br>
            <button >Add</button>
            <button type="submit" onClick={this.delete.bind(this)}>Delete</button>
        </form>
            <br></br><br>
            </br>


            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    {this.Tbody()}

                </table>
            </div>
        </div>)
    }


}

export default AddUser