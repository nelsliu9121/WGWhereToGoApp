import React, { Component, PropTypes } from 'react'
import { StackNavigator } from 'react-navigation'
import { Subheader } from 'react-native-material-design'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class HomeMain extends Component {
  static navigationOptions = (navigation) => ({
    title: 'Home',
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
      fontSize: 28,
    },
    categoryContent: {
      flex: 4,
    },
  })
  render() {
    return (
      <View style={this.styles.homeView}>
        <View style={this.styles.category}>
          <Subheader text='下一堂' color='#17BEBB' />
          <View style={this.styles.categoryContent}></View>
        </View>
        <View style={this.styles.category}>
          <Subheader text='最近的分店' color='#17BEBB' />
          <View style={this.styles.categoryContent}></View>
        </View>
      </View>
    )
  }
}

const HomeContainer = StackNavigator({
  Main: { screen: HomeMain },
})
HomeContainer.navigationOptions = {
  title: 'Home',
}

export default HomeContainer