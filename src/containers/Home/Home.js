import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import { Subheader } from 'react-native-material-ui'

class HomeMain extends Component {
  static navigationOptions = {
    title: '去哪兒',
    headerStyle: {
      backgroundColor: '#DA344D',
    },
    headerTitleStyle: {
      color: '#EEE',
    },
  }
  styles = StyleSheet.create({
    homeView: {
      flex: 1,
    },
    category: {
      flex: 1,
      alignContent: 'center',
    },
    categoryContent: {
      flex: 4,
    },
  })
  render() {
    return (
      <View style={this.styles.homeView}>
        <View style={this.styles.category}>
          <Subheader text='下一堂' />
          <View style={this.styles.categoryContent}></View>
        </View>
        <View style={this.styles.category}>
          <Subheader text='最近的分店' />
          <View style={this.styles.categoryContent}></View>
        </View>
      </View>
    )
  }
}

export default HomeMain
