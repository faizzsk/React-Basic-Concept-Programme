import react from 'react'
import 'C:/Users/iluser/Data/FAIZ_WORK/Faiz-React/mp/node_modules/bootstrap/dist/css/bootstrap.css'
class CRUD extends react.Component {

    constructor(props) {
        super(props)

        this.state = {
            prodId: '',
            prodName:'',
            prodPrice: '',
            prodBrand:'',
            act: 0,
            index: '',
            arr: []
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.del = this.del.bind(this)
    }

    changeHandler = (e) => {
        this.setState({

            [e.target.name]: e.target.value

        })

    }

    add = (e, i) => {
        e.preventDefault()

        const {prodId, prodName,prodPrice,prodBrand } = this.state

        var list = this.state.arr


        if (this.state.act == 0) {
            list.push({
                prodId: prodId,
                prodName:prodName,
                prodPrice: prodPrice,
                prodBrand:prodBrand

            })

            this.setState({

                arr: list,
                prodId: '',
                prodName:'',
                prodPrice: '',
                prodBrand:'',
                act: 0
            })
        }
        else {
            i = this.state.index
            list[i].prodId = this.state.prodId
            list[i].prodName = this.state.prodName
            list[i].prodPrice = this.state.prodPrice
            list[i].prodBrand = this.state.prodBrand

            this.setState({

                arr: list,
                prodId: '',
                prodName:'',
                prodPrice: '',
                prodBrand:'',
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
        const rows = this.state.arr.map((row, index) => {
            return <tr key={index}>

                <td >{row.prodId}</td>
                <td >{row.prodName}</td>

                <td>{row.prodPrice}</td>
                <td>{row.prodBrand}</td>

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

            prodId: array[i].prodId,
            prodName:array[i].prodName,
            prodPrice: array[i].prodPrice,
            prodBrand:array[i].prodBrand,
            act: 1,
            index: i

        })

        // return <button>Update</button>

        //   this.update()




    }
    render() {
        return (
            <div class="form-group">
                <h1>ADD PRODUCロバスト</h1>
                <br></br>
                <form onSubmit={this.add.bind(this)}>
                   Product Id : <input class="form-control" type="text" value={this.state.Firstname} name="prodId" onChange={this.changeHandler.bind(this)}></input>
                    <br></br><br>
                    </br>
                     
                    Product Name : <input class="form-control" type="text" value={this.state.LastName} name="prodName" onChange={this.changeHandler.bind(this)}></input>
                    <br></br><br>
                    </br>
                   
                Product Price : <input class="form-control" type="text" value={this.state.age} name="prodPrice" onChange={this.changeHandler.bind(this)}></input>
                            <br></br><br>
                            </br>

                            Product Brand : <input class="form-control" type="text" value={this.state.age} name="prodBrand" onChange={this.changeHandler.bind(this)}></input>
                            <br></br><br>
                            </br>

               

                            <button class="btn btn-primary btn-lg btn-block">Add Product</button>
                            <br></br><br></br>

            </form>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Product Id</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Product Price</th>
                                    <th scope="col">Product Brand</th>

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