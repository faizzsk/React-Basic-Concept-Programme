import react, { Component } from 'react'


class Calculator extends Component{

    state={
        text1:'',
        text2:'',
        result:''
    }

    changeInput1=event=>{
        event.preventDefault();

        this.setState({
            text1:event.target.value
        })
    }

    changeInput2=event=>{
        event.preventDefault();

        this.setState({
            text2:event.target.value
        })
    }

    changeInput3=event=>{
        event.preventDefault();

        this.setState({
            text3:event.target.value
        })
    }

    buttonHandler = event=>{
        event.preventDefault();
    }
    add(e) {

        // var a = document.getElementById('1').value;
        // var b = document.getElementById('2').value;
        // a = Number.parseInt();
        // b = Number.parseInt();
        // var c = a + b ;

        // document.getElementById('3').value = c
        
        // this.state.result = c;
          
        e.preventDefault();
        return this.setState({result:(parseInt(this.state.text1))+ (parseInt(this.state.text2))})
    }


    sub(e)
    {
        e.preventDefault()
        return this.setState({result:(parseInt(this.state.text1)) - (parseInt(this.state.text2))})
    }

    mult(e)
    {
        e.preventDefault()
        return this.setState({result:(parseInt(this.state.text1)) * (parseInt(this.state.text2))})   
    }

    div(e)
    {
        e.preventDefault()
        return this.setState({result:(parseInt(this.state.text1)) / (parseInt(this.state.text2))})
    }
    render()
    {
        return <form>
            <input type="text" id='1' value={this.state.name} onChange={this.changeInput1.bind(this)}>

            </input>
<br></br>
        <input type="text" id='2' onChange={this.changeInput2.bind(this)}></input><br></br>
        <input type="text" id='3' value={this.state.result} onChange={this.changeInput3.bind(this)}> 

        </input><br></br>

        <button onClick={this.add.bind(this)} onChange={this.buttonHandler.bind(this)}>Add</button>

        <button onClick={this.sub.bind(this)} onChange={this.buttonHandler.bind(this)}>Sub</button>
        <button onClick={this.mult.bind(this)} onChange={this.buttonHandler.bind(this)}>Mult</button>
        <button onClick={this.div.bind(this)} onChange={this.buttonHandler.bind(this)}>Div</button>





        </form>
    }



}

export default Calculator
