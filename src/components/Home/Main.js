import React, { Component } from 'react'
import { H3 } from 'native-base'
import {
  StyleSheet,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class HomeMain extends Component {
  static navigationOptions = (navigation) => ({
    title: '去哪兒',
    headerStyle: {
      backgroundColor: '#DA344D',
    },
    headerTitleStyle: {
      color: '#EEE',
    },
  })
  styles = StyleSheet.create({
    homeView: {
      flex: 1,
      backgroundColor: '#2E282A',
    },
    category: {
      flex: 1,
      alignContent: 'center',
    },
    categoryHeader: {
      flex: 1,
      margin: 5,
      color: '#17BEBB',
    },
    categoryContent: {
      flex: 4,
    },
  })
  render() {
    return (
      <View style={this.styles.homeView}>
        <View style={this.styles.category}>
          <H3 style={this.styles.categoryHeader}>下一堂</H3>
          <View style={this.styles.categoryContent}></View>
        </View>
        <View style={this.styles.category}>
          <H3 style={this.styles.categoryHeader}>最近的分店</H3>
          <View style={this.styles.categoryContent}></View>
        </View>
      </View>
    )
  }
}

export default HomeMain