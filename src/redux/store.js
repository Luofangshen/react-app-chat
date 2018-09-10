import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {userMsg} from './reducers'

export default createStore(userMsg, composeWithDevTools(applyMiddleware(thunk)))