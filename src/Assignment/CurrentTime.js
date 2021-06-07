import react, { Component } from 'react'


class CurrentTime extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            time : new Date().toString()
        }
    }

    buttonCLick = ()=>
    {
        this.setState({
            time : new Date().toString()
        })
    }


    render()
    {
        return(<div>
            <h1>{this.state.time}</h1>
            <button onClick={this.buttonCLick}>current time</button>
            </div>
        )
    }



}

export default CurrentTime