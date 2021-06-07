import react, { Component } from 'react'


class Toggle extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            on : 0,
            off:1
        }
    }

    buttonCLickOn = ()=>
    {
        this.setState({
            on : 1,
            off:0
        })
    }

    buttonCLickOff = ()=>
    {
        this.setState({
            on:0
        })
    }
    
    render()
    {
        return this.state.on ? <button onClick={this.buttonCLickOff}>OFF</button> : <button onClick={this.buttonCLickOn}>On</button>
    }





}

export default Toggle