import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {count} from './reducers'

const store = createStore(
    count,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store