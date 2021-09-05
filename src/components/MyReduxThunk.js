import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAction, subAction, incAction, getHomeMultidata } from '../store/actionCreators';

class MyReduxThunk extends Component {
    componentDidMount() {
        this.props.getHomeMultidata();
    }
    render() {
        return (
            <>
                当前计数：{this.props.counter}
                <hr />
                <button onClick={e => this.props.addNumber(5)}>+5</button>
                <button onClick={e => this.props.subNumber(6)}>-6</button>
                <button onClick={e => this.props.increment()}>递增</button>
                <ul>
                    {
                        this.props.banners.map(item => {
                            return <li key={item.acm}>{item.title}</li>
                        })
                    }
                </ul>
            </>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends
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
    },
    getHomeMultidata(){
        dispatch(getHomeMultidata);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyReduxThunk);