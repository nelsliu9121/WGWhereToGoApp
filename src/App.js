import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Container } from 'native-base'

import configureStore from './configureStore'
import Router from './containers/Router'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Router />
        </Container>
      </Provider>
    )
  }
}

export default App