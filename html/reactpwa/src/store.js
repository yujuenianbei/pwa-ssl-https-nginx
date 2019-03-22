import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {BottomsReducer as BottomReducer} from './layout/Bottom/redux/index';
import {HomesReducer as HomeReducer} from './layout/Home/redux/index';
const reducer = combineReducers({
    Bottom: BottomReducer,
    Home: HomeReducer,
})
const store = createStore(reducer, applyMiddleware(thunk));

export default store;