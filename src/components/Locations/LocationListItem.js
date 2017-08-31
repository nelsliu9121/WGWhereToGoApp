import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-material-ui'
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
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    locationTitle: {
      color: '#FFF',
    },
    locationSubtitle: {
      fontSize: 14,
      color: '#CCC',
    },
  })

  toggleStar () {
    
  }

  render() {
    const { location, navigate } = this.props
    return (
      <ListItem onPress={navigate} centerElement={location.name} rightElement={<LocationStar star={location.star} onRightElementPress={() => { this.toggleStar() }} />} />
    )
  }
}


export default LocationListItem