import React from 'react'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import CoursesMain from '../components/Courses/CoursesMain'

const CoursesContainer = StackNavigator({
  Main: { screen: CoursesMain },
})
CoursesContainer.navigationOptions = {
  title: '課程表',
  tabBarIcon: (<Icon name='calendar' size={24} />),
}

export default CoursesContainer
