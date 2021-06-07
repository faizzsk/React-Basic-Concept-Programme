import React, { Component } from 'react'

 class Form extends Component {
    intialState={
        name:'',
        job:''
    }
    state=this.intialState;
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    
    render() {
        const {name,job}=this.state;
        return (
            <div>
                {/* handleSubmit={this.handleSubmit} */}
                <form>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="name">Job</label>
                    <input 
                        type="text"
                        name="job"
                        id="job"
                        value={job}
                        onChange={this.handleChange}
                    />
                    <input type="button" value="Submit" onClick={this.submitForm}/>

                </form>
            </div>
        )
    }
}
export default Form