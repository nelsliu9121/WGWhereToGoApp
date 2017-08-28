import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet } from 'react-native'
import { Content } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

const mapStateToProps = (state, ownProps) => {
  return {
    location: state.Locations.locations[ownProps.navigation.state.params.id],
  }
}

@connect(mapStateToProps, undefined)
class Location extends Component {
  static navigationOptions = (navigation) => {
    return {
      title: navigation.navigation.state.params.name,
      mode: 'card',
    }
  }

  styles = StyleSheet.create({

  })
  
  render() {
    return (
      <Content />
    )
  }
}

export default Location