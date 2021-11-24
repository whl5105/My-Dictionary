import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import card from "./modules/Card";
import thunk from "redux-thunk";

//미들웨어들 하나로 묶기
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

//리듀서 묶기
const rootReducer = combineReducers({ card });

//스토어 생성
const store = createStore(rootReducer, enhancer);

export default store;
