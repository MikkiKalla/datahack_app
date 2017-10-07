import { StackNavigator } from 'react-navigation'
import React, { Component } from 'react';
import { TouchableOpacity, Text, Platform, StatusBar } from 'react-native';
import HomeScreen from './HomeScreen'

export default StackNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    navigationOptions: {
      headerRight: <TouchableOpacity><Text>Menu</Text></TouchableOpacity>,
      headerStyle: { marginTop: StatusBar.currentHeight },
    },
  }
);