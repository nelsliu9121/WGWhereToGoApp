import React from 'react'
import { StackNavigator } from 'react-navigation'

import Home from '../containers/Home/Home'

const HomeContainer = StackNavigator({
  Home: { screen: Home },
})
HomeContainer.navigationOptions = {
  title: '去哪兒',
}

export default HomeContainer
