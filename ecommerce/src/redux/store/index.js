import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "../root-reducer";
import thunk from 'redux-thunk'
import {persistStore} from 'redux-persist'
const middleware = [thunk,logger];
export const  store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);
