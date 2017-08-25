import Immutable from 'immutable'
import { Platform } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import firebase from 'firebase'
import reducers from './reducers'
import { ActionCreators } from './actions'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

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
  sagaMiddleware.run(sagas)
  updateStore(store)
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./reducers').default)
    })
  }
  return store
}

firebase.initializeApp({
  apiKey: 'AIzaSyBFS3xZLEjOBOlW9RudLbScoqSPjXQkhpQ',
  authDomain: 'wgwheretogo.firebaseapp.com',
  databaseURL: 'https://wgwheretogo.firebaseio.com',
  projectId: 'wgwheretogo',
  storageBucket: 'wgwheretogo.appspot.com',
  messagingSenderId: '369386805312'
})
