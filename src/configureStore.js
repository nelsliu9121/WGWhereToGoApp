import Immutable from 'immutable'
import { Platform } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import './utils/firebase'
import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

let enhancer
let updateStore = f => f
if (__DEV__) {
  const installDevTools = require('immutable-devtools')
  const devTools = require('redux-devtools-extension').composeWithDevTools

  installDevTools(Immutable)
  updateStore = devTools.updateStore || updateStore

  enhancer = devTools(
    applyMiddleware(...middlewares),
  )
} else {
  enhancer = applyMiddleware(...middlewares)
}

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, enhancer)
  sagaMiddleware.run(sagas)
  updateStore(store)
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./reducers').default)
    })
  }
  return store
}

