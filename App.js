import React, { Component } from 'react'
import { View, Text } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

export default class WelcomePage extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <View>
        <Text>
          aaaa
        </Text>
      </View>
    )
  }
}
