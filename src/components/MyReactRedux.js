import React from 'react';
// import { connect } from '../utils/connect';
import {connect} from 'react-redux';
import { addAction, subAction, incAction } from '../store/actionCreators';

const MyRedux = props => (
    <>
        当前计数：{props.counter}
        <hr />
        <button onClick={e => props.addNumber(5)}>+5</button>
        <button onClick={e => props.subNumber(6)}>-6</button>
        <button onClick={e => props.increment()}>递增</button>
    </>
)

const mapStateToProps = state => ({
    counter: state.counter
})
const mapDispatchToProps = dispatch => ({
    increment() {
        dispatch(incAction());
    },
    subNumber(num) {
        dispatch(subAction(num));
    },
    addNumber(num) {
        dispatch(addAction(num));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyRedux);