import {createStore,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import reducer from './reducer';

// composeEnhancers 函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

// 应用中间件
const sagaMiddleware = createSagaMiddleware();

const storeEnhancer = applyMiddleware(thunkMiddleware,sagaMiddleware);
const store = createStore(reducer,composeEnhancers(storeEnhancer));

sagaMiddleware.run(saga);

export default store;