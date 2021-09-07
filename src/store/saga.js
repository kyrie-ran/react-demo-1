// import { takeEvery,put,all } from "redux-saga/effects";
import { takeLatest,put,all } from "redux-saga/effects";
import { FETCH_HOME_MULTIDATA } from './constants';
import { changeBannersAction, changeRecommendAction} from "./actionCreators";
import axios from "axios";

function* fetchHomeMulitdata(){
    const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
    // yield put(changeBannersAction(res.data.data.banner.list));
    yield all([
        yield put(changeBannersAction(res.data.data.banner.list)),
        yield put(changeRecommendAction(res.data.data.recommend.list))
    ])
}

function* mySaga(){
    // takeLatest 一次只能监听一个对应的action，如果有多个只执行最后一个
    // takeEvery 每一个都被执行
    yield takeLatest(FETCH_HOME_MULTIDATA,fetchHomeMulitdata);
}

export default mySaga;