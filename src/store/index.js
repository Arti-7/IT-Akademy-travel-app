import {createStore, compose, applyMiddleware} from "redux";
import hotelsReducer from "./reducers/hotelsReducer";
import thunk from "redux-thunk";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(thunk)

const store = createStore(
    hotelsReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnchancer(middlewares)
     );

export default store;