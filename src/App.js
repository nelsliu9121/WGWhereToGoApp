import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-native-material-ui'

import configureStore from './configureStore'
import Router from './containers/Router'

const store = configureStore()

class App extends Component {
  theme = {

  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider uiTheme={this.theme}>
          <Router />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App