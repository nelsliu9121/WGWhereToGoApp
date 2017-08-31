import React from 'react'
import { Button } from 'react-native-material-ui'
import Icon from 'react-native-vector-icons/FontAwesome'

const LocationStar = (props) => {
  const { star } = props
  return (
    <Button icon={star ? 'star' : 'star-border'} text='' />
  )
}

export default LocationStar
