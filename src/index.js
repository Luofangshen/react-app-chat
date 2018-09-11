import React from 'react'
import {render} from 'react-dom'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import App from './components/app'
import store from './redux/store'
import './less/page.less'
import './less/shipei'

render((
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
    ),
    document.getElementById('root')
)

