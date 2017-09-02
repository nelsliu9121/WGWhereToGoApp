import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  SectionList,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Subheader } from 'react-native-material-ui'
import _ from 'lodash'

import LocationListItem from './LocationListItem'
import { Creators as LocationActionCreators } from '../../actions/LocationActions'

const mapStateToProps = (state) => ({
  locations: state.Locations.locations,
})

const mapDispatchToProps = (dispatch) => ({
  LocationActions: bindActionCreators(LocationActionCreators, dispatch),
})

@connect(mapStateToProps, mapDispatchToProps)
class LocationsMain extends Component {
  static navigationOptions = (navigation) => ({
    title: '找分店',
    headerStyle: {
      backgroundColor: '#DA344D',
    },
    headerTitleStyle: {
      color: '#EEE',
    },
    headerRight: (<Button icon='place' text='' onPress={() => {navigation.navigation.navigate('Map')}} />),
  })

  styles = StyleSheet.create({
    locationsContainer: {
      flex: 1,
    },
  })

  componentWillMount() {
    if (this.props.locations.length <= 0) {
      this.props.LocationActions.fetchLocations()
    }
  }

  navigatorToLocation (location) {
    this.props.navigation.navigate('Location', { id: location.id, name: location.name })
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
        <SectionList sections={this._sortByCity(locations)} renderItem={({ item }) => <LocationListItem location={item} navigate={() => {this.navigatorToLocation(item)}} />} renderSectionHeader={({ section }) => <Subheader text={section.key} />} keyExtractor={(d, i) => i} />
      </View>
    )
  }
}

export default LocationsMain
