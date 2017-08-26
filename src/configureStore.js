import Immutable from 'immutable'
import { Platform } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import firebase from 'firebase'
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

global.firebase = firebase.initializeApp({
  apiKey: 'AIzaSyBFS3xZLEjOBOlW9RudLbScoqSPjXQkhpQ',
  authDomain: 'wgwheretogo.firebaseapp.com',
  databaseURL: 'https://wgwheretogo.firebaseio.com',
  projectId: 'wgwheretogo',
  storageBucket: 'wgwheretogo.appspot.com',
  messagingSenderId: '369386805312',
})

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

