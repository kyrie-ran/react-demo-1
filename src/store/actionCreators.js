import {ADD_NUMBER,SUB_NUMBER,INCREMENT,CHANGE_RECOMMEND,CHANGE_BANNERS} from './constants.js';

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