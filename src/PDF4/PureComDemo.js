import react, { Component, Fragment } from 'react'

class PureComDemo extends react.PureComponent{

    constructor()
    {
        super()
        this.state={
            name : "Faiz"
        }
    }

    buttonClick=() =>
    {
        this.setState({
            name:"Faiz"
        })

        alert(this.state.name)
    }
    render()
    {            console.log("Rendering.....")

        return(
                <button onClick={this.buttonClick}>Change</button>
        )
    }

}
export default PureComDemo