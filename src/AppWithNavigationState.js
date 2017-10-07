import React, { Component } from 'react';
import { View } from 'react-native'
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import BottomMenu from './components/BottomMenu'
import NavigationContainer from './containers/NavigationContainer';

import { fetchVerseByCat, fetchVerses } from './actions/verse'

export class AppWithNavigationState extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchVerses())
  }
  render() {
    const { dispatch, navigation } = this.props;

    return (
      <View style={{flex: 1}}>
        <NavigationContainer navigation={addNavigationHelpers({ dispatch, state: navigation })} />
        <BottomMenu navigation={addNavigationHelpers({ dispatch, state: navigation })}  />
      </View>
    );
  }
}

export const mapStateToProps = ({ navigation }) => ({ navigation });

export default connect(mapStateToProps)(AppWithNavigationState);