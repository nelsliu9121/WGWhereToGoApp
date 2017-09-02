import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-material-ui'
import Icon from 'react-native-vector-icons/FontAwesome'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export default class LocationsMap extends Component {
  static navigationOptions = (navigation) => ({
    title: '地圖找分店',
    headerRight: (<Button icon='list' text='' onPress={() => {navigation.navigation.goBack()}} />),
  })

  styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    locationsMap: {
      ...StyleSheet.absoluteFillObject,
    },
  })

  render() {
    return (
      <MapView style={this.styles.locationsMap} region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }} provider={PROVIDER_GOOGLE}>
      </MapView>
    )
  }
}
