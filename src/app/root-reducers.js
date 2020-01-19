import {combineReducers} from 'redux'

import counterReducer from '../features/counter/counter-reducer'

import postReducer from '../features/post/postReducer'



const reducer = (state = { name: 'golam' }, actions) => {
    return state;
}

const rootReducers=combineReducers({
    basicReducer:reducer,
    counterReducer:counterReducer,
    posts:postReducer

})

export default rootReducers