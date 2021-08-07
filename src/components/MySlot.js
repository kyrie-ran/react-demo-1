import React, { Component } from 'react';

export default class MySlot extends Component{
    render(){
        return (
            <>
               {this.props.children}
               {this.props.left}
               {this.props.right}
            </>
        )
    }
}