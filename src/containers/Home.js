import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class HomeContainer extends Component {
  static navigationOptions = {
    drawLabel: "Home",
    drawIcon: ({tintColor}) => (
      <Icon name='home' size={24} style={{ tintColor }} />
    )
  }
  styles = StyleSheet.create({
    category: {},
    categoryHeader: {},
    categoryContent: {},
  })
  render() {
    return (
      <View>
        <View style={this.styles.category}>
          <Text style={this.styles.categoryHeader}>下一堂</Text>
          <View style={this.styles.categoryContent}></View>
        </View>
        <View style={this.styles.category}>
          <Text style={this.styles.categoryHeader}>最近的分店</Text>
          <View style={this.styles.categoryContent}></View>
        </View>
      </View>
    )
  }
}

export default HomeContainer