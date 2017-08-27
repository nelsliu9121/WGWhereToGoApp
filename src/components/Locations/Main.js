import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  StyleSheet,
  View,
  SectionList,
} from 'react-native'
import { H3 } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import _ from 'lodash'

import Location from './Location'

import { Creators as LocationActionCreators } from '../../actions/LocationActions'

const mapStateToProps = (state) => ({
  locations: state.Locations.locations,
})

const mapDispatchToProps = (dispatch) => ({
  LocationActions: bindActionCreators(LocationActionCreators, dispatch),
})

@connect(mapStateToProps, mapDispatchToProps)
class LocationsMain extends Component {
  static navigationOptions = {
    title: 'Locations',
    tabBarIcon: (<Icon name='map' size={24} />),
  }

  styles = StyleSheet.create({
    locationsContainer: {
      flex: 1,
      backgroundColor: '#2E282A',
    },
    sectionHeader: {
      flex: 1,
      margin: 15,
      color: '#17BEBB',
    },
  })
  
  componentWillMount() {
    this.props.LocationActions.fetchLocations()
  }
  
  _sortByCity (locations) {
    if (locations.length <= 0) return []
    return _.filter(_.map(_.groupBy(locations, 'zip_city'), (v, k) => ({
      key: k,
      data: v,
    })), (d) => d.key !== 'undefined')
  }
  
  render() {
    const { locations } = this.props
    return (
      <View style={this.styles.locationsContainer}>
        <SectionList sections={this._sortByCity(locations)} renderItem={({ item }) => <Location location={item} key={item.id} />} renderSectionHeader={({ section }) => <H3 style={this.styles.sectionHeader} key={section.key}>{section.key}</H3>} />
      </View>
    )
  }
}

export default LocationsMain