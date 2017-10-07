import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import styles from './styles';


export default class HomeScreenContainer extends Component {
  static navigationOptions = {
    title: 'Vacc Sack',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.bground}>
        </View>
      </ScrollView>
    );
  }
}