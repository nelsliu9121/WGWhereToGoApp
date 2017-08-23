import Immutable from 'immutable'
import { Platform } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers/index.js'
import { ActionCreators } from './actions/index.js'

const middlewares = []

let enhancer
let updateStore = f => f
if (__DEV__) {
  const installDevTools = require('immutable-devtools')
  const devTools = global.reduxNativeDevTools || require('remote-redux-devtools')

  installDevTools(Immutable)
  updateStore = devTools.updateStore || updateStore

  enhancer = compose(
    applyMiddleware(...middlewares),
    devTools({
      name: Platform.OS,
      ...require('../package.json').remotedev,
      ActionCreators,
    })
  )
} else {
  enhancer = applyMiddleware(...middlewares)
}

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, enhancer)
  updateStore(store)
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./reducers').default)
    })
  }
  return store
}
