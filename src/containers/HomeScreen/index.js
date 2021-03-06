import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';

import styles from './styles';


export default class HomeScreenContainer extends Component {
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
        <View style={styles.bground}></View>
        <Image style={styles.profileImage} source={require('../../assets/images/joshua.jpg')} />
        <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigate('UserVaccinations')}>
          <Text style={styles.btn}>My Vaccinations</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}