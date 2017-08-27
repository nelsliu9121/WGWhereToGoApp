import React from 'react'
import { StackNavigator } from 'react-navigation'

import LocationsMain from '../components/Locations/Main'

const LocationsContainer = StackNavigator({
  Main: { screen: LocationsMain },
})
LocationsContainer.navigationOptions = {
  title: '分店列表',
}

export default LocationsContainer