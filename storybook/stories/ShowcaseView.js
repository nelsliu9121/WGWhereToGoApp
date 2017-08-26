import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

class ShowCaseView extends Component {
  styles = StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: '#2E282A',
    },
  })
  render() {
    return (
      <View style={this.styles.view} />
    )
  }
}

export default ShowCaseView