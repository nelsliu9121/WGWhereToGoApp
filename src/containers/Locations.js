import React from 'react'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import LocationsMain from '../components/Locations/Main'
import LocationsMap from '../components/Locations/LocationsMap'
import Location from '../components/Locations/Location'

const LocationsContainer = StackNavigator({
  Main: { screen: LocationsMain },
  Map: { screen: LocationsMap },
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