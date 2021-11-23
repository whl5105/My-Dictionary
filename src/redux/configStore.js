import { createStore, combineReducers } from "redux";
import card from "./modules/Card";

//리듀서 묶기
const rootReducer = combineReducers({ card });

//스토어 생성
const store = createStore(rootReducer);

export default store;

//combineReducers : 리듀서 묶어주는함수
