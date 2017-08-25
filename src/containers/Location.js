import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class LocationContainer extends Component {
  static navigationOptions = {
    drawLabel: "Locations",
    drawIcon: ({tintColor}) => (
      <Icon name='pin' size={24} style={{ tintColor }} />
    )
  }
  render() {
    return (
      <View>
        <Text>World Gym Where To Go</Text>
      </View>
    )
  }
}

export default LocationContainer