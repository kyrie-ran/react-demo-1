import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class My extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogin: true
        }
    }
    
    render() {
        console.log(this.props.location);
        return this.state.isLogin ? (
            <div>
                my
            </div>
        ) : <Redirect to="/login"/>
    }
}
