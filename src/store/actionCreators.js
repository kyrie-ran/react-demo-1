import {ADD_NUMBER,SUB_NUMBER,INCREMENT,CHANGE_RECOMMEND,CHANGE_BANNERS} from './constants.js';
import axios from 'axios';

export const addAction = num => (
    {
        type: ADD_NUMBER,
        num
    }
)

export const subAction = num => (
    {
        type: SUB_NUMBER,
        num
    }
)

export const incAction = () => (
    {
        type: INCREMENT
    }
)

export const changeBannersAction = banners => ({
    type: CHANGE_BANNERS,
    banners
})
export const changeRecommendAction = recommends => ({
    type: CHANGE_RECOMMEND,
    recommends
})

// redux-thunk 中定义的 action 的函数
export const getHomeMultidata = dispatch => {
    axios({
        url: "http://123.207.32.32:8000/home/multidata",
    }).then(res => {
        console.log(res.data.data);
        const {banner: {list: bannerList},recommend:{list:recommendList}} = res.data.data;
        dispatch(changeBannersAction(bannerList));
        dispatch(changeRecommendAction(recommendList));
    })
}