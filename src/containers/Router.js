import { TabNavigator } from 'react-navigation'
import HomeContainer from './Home'
import LocationContainer from './Location'

export default TabNavigator({
  Home: { screen: HomeContainer },
  Location: {
    screen: LocationContainer,
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