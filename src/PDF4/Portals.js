import react, { Component } from 'react'
import reactDom from 'react-dom'

class PortalDemo extends Component{





    render()
    {
        return reactDom.createPortal(
            <h1>Welcome to Portals</h1>,
            document.getElementById('p-root')
        )
    }
}

export default PortalDemo
