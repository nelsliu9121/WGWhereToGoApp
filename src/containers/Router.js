import { TabNavigator } from 'react-navigation'
import HomeContainer from './Home'
import LocationsContainer from './Locations'
import CoursesContainer from './Courses'

export default TabNavigator({
  Home: { screen: HomeContainer },
  Location: {
    screen: LocationsContainer,
  },
  Courses: {
    screen: CoursesContainer,
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
