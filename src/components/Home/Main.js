import React, { Component } from 'react'
import { Subheader } from 'react-native-material-ui'
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
    categoryContent: {
      flex: 4,
    },
  })
  render() {
    return (
      <View style={this.styles.homeView}>
        <View style={this.styles.category}>
          <Subheader color='#17BEBB' text='下一堂' />
          <View style={this.styles.categoryContent}></View>
        </View>
        <View style={this.styles.category}>
          <Subheader color='#17BEBB' text='最近的分店' />
          <View style={this.styles.categoryContent}></View>
        </View>
      </View>
    )
  }
}

export default HomeMain