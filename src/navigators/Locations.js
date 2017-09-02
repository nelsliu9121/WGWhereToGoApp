import React from 'react'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import LocationsMain from '../containers/Locations/LocationsMain'
import LocationsMap from '../containers/Locations/LocationsMap'
import Location from '../containers/Locations/Location'

const LocationsContainer = StackNavigator({
  LocationsMain: { screen: LocationsMain },
  LocationsMap: { screen: LocationsMap },
  Location: {
    screen: Location,
    path: '/location/:id',
  },
})
LocationsContainer.navigationOptions = {
  title: '分店列表',
  tabBarIcon: (<Icon name='map' size={24} />),
}

export default LocationsContainer
