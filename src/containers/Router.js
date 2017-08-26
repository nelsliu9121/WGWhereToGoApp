import { TabNavigator } from 'react-navigation'
import HomeContainer from './Home'
import LocationsContainer from './Locations'

export default TabNavigator({
  Home: { screen: HomeContainer },
  Location: {
    screen: LocationsContainer,
    path: 'location/:id',
  },
}, {
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    style: {
      backgroundColor: '#DA344D',
    },
  },
})