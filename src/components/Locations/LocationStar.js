import React from 'react'
import { Button } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

const LocationStar = function () {
  return (
    <Button transparent>
      <Icon name='star-o' size={24} />
    </Button>
  )
}

export default LocationStar
