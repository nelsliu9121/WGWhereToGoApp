import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Icom from 'react-native-vector-icons/FontAwesome'

class Location extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  style = StyleSheet.create({
    location: {
      flexDirection: row
    }
  })

  render() {
    const { name, city, district, star } = this.props
    return (
      <View style={this.style.location}>
        <View style={this.style.locationHeader}>
          <Text>{title}</Text>
        </View>
        <View style={this.style.locationContent}>
          <Text>{title}</Text>
        </View>
        <View style={this.style.locationFooter}>
          <Icon name="star" size={30} />
        </View>
      </View>
    )
  }
}


export default Location