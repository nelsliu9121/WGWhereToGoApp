import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { Button } from 'react-native-material-ui'
import Icon from 'react-native-vector-icons/FontAwesome'

import firebase from '../../utils/firebase'

const mapStateToProps = (state, ownProps) => {
  return {
    location: state.Locations.locations[ownProps.navigation.state.params.id],
  }
}

@connect(mapStateToProps, undefined)
class Location extends Component {
  static navigationOptions = (navigation) => ({
    title: navigation.navigation.state.params.name,
    headerRight: (<Button icon='star' text='' onPress={() => {}} />),
  })

  styles = StyleSheet.create({
    view: {
      padding: 15,
      flex: 1,
      flexDirection: 'column',
    },
    headerText: {
      fontSize: 14,
    },
    text: {
      fontSize: 16,
    },
    image: {
      width: 200,
      height: 200,
    },
  })

  state = {
    locationImage: undefined,
  }

  componentDidMount() {
    this.setState({
      locationImage: `https://firebasestorage.googleapis.com/v0/b/wgwheretogo.appspot.com/o/?name=${this.props.location.image_path}&alt=media`,
    })
  }
  
  
  render() {
    const { location } = this.props
    return (
      <View>
        <Image source={{ uri: this.state.locationImage }} style={this.styles.image} />
        <View style={this.styles.view}>
          <Text style={this.styles.headerText}>地址</Text>
          <Text style={this.styles.text}>{location.address}</Text>
        </View>
      </View>
    )
  }
}

export default Location