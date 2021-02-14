import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import GalleryReducer from "./GalleryReducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    listImages: GalleryReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store

export default store