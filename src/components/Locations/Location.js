import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Text } from 'native-base'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

class Location extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  styles = StyleSheet.create({
    location: {
      flex: 1,
      margin: 15,
    },
    locationTitle: {
      color: '#FFF',
    },
    locationSubtitle: {
      fontSize: 14,
      color: '#CCC',
    },
  })

  render() {
    const { location } = this.props
    return (
      <View style={this.styles.location}>
        <Text style={this.styles.locationTitle}>{location.name}</Text>
        <Text style={this.styles.locationSubtitle}>{location.alias}</Text>
      </View>
    )
  }
}


export default Location