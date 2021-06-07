import react, { Component, Fragment } from 'react'

class RefDemo extends Component{

    constructor(props)
    {
        super(props)
        this.inputRef = react.createRef()


    }

    componentDidMount()
    {
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }

    clickHandler = ()=>
    {
        alert(this.inputRef.current.value)
    }
    render()
    {
        return(
                <Fragment>
                  <input ref=  {this.inputRef}/>

            <button onClick={this.clickHandler}>Click me</button>
                </Fragment>
        )
    }

}
export default RefDemo