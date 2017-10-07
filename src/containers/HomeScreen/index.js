import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import styles from './styles';


export default class HomeScreenContainer extends Component {
  static navigationOptions = {
    title: 'Ferskeytla',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    );
  }
}