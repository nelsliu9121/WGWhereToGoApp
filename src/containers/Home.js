import React from 'react'
import { StackNavigator } from 'react-navigation'

import HomeMain from '../components/Home/Main'

const HomeContainer = StackNavigator({
  Main: { screen: HomeMain },
})
HomeContainer.navigationOptions = {
  title: '去哪兒',
}

export default HomeContainer