import { DrawerNavigator } from 'react-navigation'
import HomeContainer from './Home'
import LocationContainer from './Location'

export default DrawerNavigator({
  Home: { screen: HomeContainer },
  Location: { screen: LocationContainer }
})