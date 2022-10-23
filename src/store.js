import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./redux/reducer/index";
// import mySaga from "./sagas.js";

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer);

// sagaMiddleware.run(mySaga);
export default store;
