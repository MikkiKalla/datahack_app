import { StackNavigator } from 'react-navigation'
import React, { Component } from 'react';
import { TouchableOpacity, Text, Platform, StatusBar } from 'react-native';
import HomeScreen from './HomeScreen'
import UserVaccinations from './UserVaccinations'

export default StackNavigator(
  {
    Home: { screen: HomeScreen },
    UserVaccinations: { screen: UserVaccinations }
  },
  {
    navigationOptions: {
      headerRight: <TouchableOpacity><Text>Menu</Text></TouchableOpacity>,
      headerStyle: { marginTop: StatusBar.currentHeight },
    },
  }
);