import react, { Component } from "react"

var HOC = OriginalComponent =>{

    class NewComponent extends Component{

        constructor(props)
        {
            super(props)

            this.state = {
                counter : 0
            }
        }

        counterIncrement = () =>{

            this.setState({
                counter : this.state.counter + 1 

            })
        
        }

        render()
        {
            return (
                <OriginalComponent counter={this.state.counter}
                counterIncrement={this.counterIncrement}
                />
            )
        }


    }
    return NewComponent
}

export default HOC