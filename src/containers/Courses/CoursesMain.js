import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import { Subheader, Toolbar } from 'react-native-material-ui'

export default class CoursesMain extends Component {
  static navigationOptions = {
    title: '找課程',
    header: null,
  }

  styles = StyleSheet.create({})

  onSearch () {}

  render() {
    return (
      <View>
        <Toolbar onChangeText={() => {this.onSearch()}} centerElement='找課程' searchable={{ autoFocus: true, placeholder: '找課程' }} />
        <View>
          <Subheader text='下一堂課' />
        </View>
      </View>
    )
  }
}
