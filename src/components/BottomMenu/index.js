import React, { Component } from 'react'
import { View, Text, StyleSheet, ListView, StatusBar, Button, TouchableOpacity, Image } from 'react-native'
import SVGImage from 'react-native-svg-image';

import styles from './styles'

export default class BottomMenu extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={() => navigate('Home')}>
          <Image
            style={styles.menuItem}
            source={require('../../assets/images/ic_home_3x.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Search')}>
          <Image
            style={styles.menuItem}
            source={require('../../assets/images/search.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Category', { setTitle: 'Klámvísur' })}>
          <Image
            style={styles.menuItem}
            source={require('../../assets/images/favorite.png')}
          />
        </TouchableOpacity>
      </View>
    )
  }
}