import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Creators as LocationActionCreators } from '../actions/LocationActions'

const mapStateToProps = (state, ownProps) => ({
  locations: state.locations,
})

const mapDispatchToProps = (dispatch) => ({
  LocationActions: bindActionCreators(LocationActionCreators, dispatch),
})

@connect(mapStateToProps, mapDispatchToProps)
class LocationsContainer extends Component {
  static navigationOptions = {
    title: 'Locations',
    tabBarIcon: (<Icon name='pin' size={24} />),
  }
  
  componentWillMount() {
    this.props.LocationActions.subscribeLocations()
  }
  
  render() {
    return (
      <View>
        <Text>World Gym Where To Go</Text>
      </View>
    )
  }
}

export default LocationsContainer