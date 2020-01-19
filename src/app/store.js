import {createStore,compose,applyMiddleware} from 'redux'

import RootReducer from './root-reducers'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middleware = [thunk,logger]

const store = createStore(RootReducer, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))


export default store