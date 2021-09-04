import React, { Component } from 'react'
import store from '../store';
import {addAction,subAction,incAction} from '../store/actionCreators'

export default class MyRedux extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: store.getState().counter
        }
    }
    increment(){
        store.dispatch(incAction());
    }
    addNumber(){
        store.dispatch(addAction(5));
    }
    subNumber(){
        store.dispatch(subAction(6));
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe(); // 取消订阅
    }
    render() {
        return (
            <div>
                当前计数：{this.state.counter}
                <hr />
                <button onClick={e => this.addNumber(5)}>+5</button>
                <button onClick={e => this.subNumber(6)}>-6</button>
                <button onClick={e => this.increment()}>递增</button>
            </div>
        )
    }
}
