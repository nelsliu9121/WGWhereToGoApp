import { TabNavigator } from 'react-navigation'
import HomeContainer from './Home'
import LocationContainer from './Location'

export default TabNavigator({
  Home: { screen: HomeContainer },
  Location: { screen: LocationContainer },
}, {
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#DA344D',
  },
})