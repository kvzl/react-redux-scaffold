import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

import AppContainer from './containers/Dev.js'
// import AppContainer from './containers/App.js'

import DevTools from './containers/DevTools.js'

render(
  <Provider store={ store }>
    <div>
      <AppContainer />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
