import React, { Component } from 'react';

export default class MyForm extends Component{
    constructor(props){
        super(props);
        this.state = {value:'1'}
    }
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    render(){
        return (
            <>
                <label>
                    名字：
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <p>{this.state.value}</p>
            </>
        )
    }
}