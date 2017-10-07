import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore'

import AppWithNavigationState from './src/AppWithNavigationState';
export const store = configureStore()

//console.log(store.getState())

export default () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);