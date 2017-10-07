import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';

import styles from './styles';


export default class UserVaccinations extends Component {
  static navigationOptions = {
    headerStyle: {
    backgroundColor: 'red',
    borderBottomWidth: 0
    },
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="dark-content"
        />
        <View style={styles.bground}>
        </View>
      </ScrollView>
    );
  }
}