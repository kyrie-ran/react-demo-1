import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAction, subAction, incAction, changeBannersAction, changeRecommendAction } from '../store/actionCreators';
import axios from 'axios';

class MyClassReactRedux extends Component {
    componentDidMount() {
        axios({
            url: "http://123.207.32.32:8000/home/multidata",
        }).then(res => {
            console.log(res.data.data);
            const {banner: {list: bannerList},recommend:{list:recommendList}} = res.data.data;
            this.props.changeBanners(bannerList);
            this.props.changeRecommend(recommendList);
        })
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
    changeBanners(banners) {
        dispatch(changeBannersAction(banners));
    },
    changeRecommend(recommends) {
        dispatch(changeRecommendAction(recommends));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyClassReactRedux);