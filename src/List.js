import react, { Component } from 'react'



class List extends Component {


    list = [];


    state = {
        text1: '',
        re:''
    }

    //this.changeHand = this.changeHand.bind(this)

    changeHand = e => {
        this.setState({
            text1: e.target.value
        })
    }

    add(e) {
        this.list.push(this.state.text1)
        // e.preventDefault()

        // this.setState({

        //     text2: this.state.text1
        // })

      e.preventDefault()
    }
    render() {
        return <div>

            <input type="text" onChange={this.changeHand.bind(this)} ></input>
            <button onClick={this.add.bind(this)}>Add</button>

            <ul>
                {this.list.map((item) => (

                    <li>{item}</li>
                ))}
                <li></li>
            </ul>

            <br></br>



            <select >
                    

            </select>

        </div>
    }




}
export default List