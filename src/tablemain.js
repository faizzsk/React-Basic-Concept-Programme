import React, { Component } from 'react'
import Form from './form';
import Table from './table'

 class Tablemain extends Component {
    state={
         characters:[
            {
                name:'Abhishek',
                job:'Sr. Developer'
            },
            {
                name:'Ramni',
                job:'Sr. Tester'
            },
            {
                name:'Tanvi',
                job:'Sr.Analyst'
            },
            {
                name:'Gaurav',
                job:'Team Lead'
            },
            {
                name:'Devesh',
                job:'Manager'
            },
        ]
    } 
    removeCharacter=(index)=>
    {
        const {characters}=this.state;

        this.setState({
            characters:characters.filter((character,i)=>{
                return i!=index
                })
        })
    }
    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }
    render() {
       const {characters}=this.state; 
        return (
            <div>
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <Form  handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default Tablemain