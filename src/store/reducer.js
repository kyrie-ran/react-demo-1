import {ADD_NUMBER,SUB_NUMBER,INCREMENT,CHANGE_BANNERS,CHANGE_RECOMMEND} from './constants.js';
import { combineReducers } from 'redux';  // combineReducers 合并多个reducer

// 拆分reducer
const initialCounterState = {
    counter: 0
}
function counterReducer(state = initialCounterState,action){
    switch(action.type){
        case ADD_NUMBER:
            return {...state,counter: state.counter + action.num};
        case SUB_NUMBER:
            return {...state,counter: state.counter - action.num};
        case INCREMENT:
            return {...state,counter: state.counter + 1};
        default:
            return state;
    }
}

const initialHomeState = {
    banners: [],
    recommends: []
}
function homeReducer(state = initialHomeState,action){
    switch(action.type){
        case CHANGE_BANNERS:
            return {...state,banners: action.banners};
        case CHANGE_RECOMMEND:
            return {...state,recommends:action.recommends};
        default:
            return state;
    }
}

// function reducer(state = {}, action){
//     return {
//         counterInfo: counterReducer(state.counterInfo,action),
//         homeInfo: homeReducer(state.homeInfo,action)
//     }
// }

const reducer = combineReducers({
    counterInfo: counterReducer,
    homeInfo: homeReducer
})

export default reducer;