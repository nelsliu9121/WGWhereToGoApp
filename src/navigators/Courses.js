import React from 'react'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import CoursesMain from '../containers/Courses/CoursesMain'
import CoursesList from '../containers/Courses/CoursesList'

const CoursesContainer = StackNavigator({
  CoursesMain: { screen: CoursesMain },
  CoursesList: { screen: CoursesList },
})

CoursesContainer.navigationOptions = {
  title: '課程表',
  tabBarIcon: (<Icon name='calendar' size={24} />),
}

export default CoursesContainer
