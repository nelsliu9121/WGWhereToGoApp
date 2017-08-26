import React, { Component, PropTypes } from 'react'
import { StackNavigator } from 'react-navigation'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const HomeContainer = StackNavigator({
  Main: { screen: HomeMain },
})

export default HomeContainer

class HomeMain extends Component {
  static navigationOptions = {
    drawLabel: 'Home',
    drawIcon: ({ tintColor }) => (
      <Icon name='home' size={24} style={{ tintColor }} />
    ),
  }
  styles = StyleSheet.create({
    homeView: {
      backgroundColor: '#2E282A',
    },
    category: {
      flex: 1,
    },
    categoryHeader: {
      flex: 1,
      color: '#17BEBB',
    },
    categoryContent: {
      flex: 4,
    },
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

export { HomeMain }