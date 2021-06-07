import react, { Component } from 'react'
import reactDom from 'react-dom'
//import ErrorBoundary from './ErrorBoundary'

class ErrorBoundryEg extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            hasError : false
        }
    }

    static getDerivedStateFromError()
    {
        return {hasError : true}
    }

    // componentDidCatch(error,info){
    

    // }

    render()
    {
        if(this.state.hasError){
            return <h1>Something went Wrong</h1>
        }
        return this.props.children
    }

}


export default ErrorBoundryEg