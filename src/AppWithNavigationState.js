import React, { Component } from 'react';
import { View, StatusBar, Platform, StyleSheet} from 'react-native'
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import BottomMenu from './components/BottomMenu'
import NavigationContainer from './containers/NavigationContainer';

//import { fetchSomething } from './actions/something'


const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});


export class AppWithNavigationState extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    //dispatch(fetchSomething())
  }
  render() {
    const { dispatch, navigation } = this.props;

    return (
      <View style={{flex: 1}}>
        <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
        <NavigationContainer navigation={addNavigationHelpers({ dispatch, state: navigation })} />
      </View>
    );
  }
}

export const mapStateToProps = ({ navigation }) => ({ navigation });

export default connect(mapStateToProps)(AppWithNavigationState);