import react, { Component } from "react"
import HOC from './HOC';

class ClickCounterUsingHoc extends Component{

    constructor(props)
    {
        super(props)
        this.state ={

            name : "Faiz"

        }
    }

    render()
    {
        const {counter, counterIncrement} = this.props
        return(<div>
            <button onMouseOver={counterIncrement}>{counter} {this.state.name}</button>
        </div>
        )
    }
}
export default HOC(ClickCounterUsingHoc);