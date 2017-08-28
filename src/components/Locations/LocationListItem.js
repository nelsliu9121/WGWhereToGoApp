import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Text, ListItem, Body, Right } from 'native-base'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

import LocationStar from './LocationStar'

class LocationListItem extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    navigate: PropTypes.func.isRequired,
  }

  styles = StyleSheet.create({
    location: {
      flex: 1,
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
    const { location, navigate } = this.props
    return (
      <ListItem icon style={this.styles.location} onPress={navigate}>
        <Body>
          <Text style={this.styles.locationTitle}>{location.name}</Text>
        </Body>
        <Right>
          <LocationStar star={location.star} />
          <Icon name='chevron-right' size={24} />
        </Right>
      </ListItem>
    )
  }
}


export default LocationListItem