import React, {Component} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Clock} from './components';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1}}>
            <Clock
              twentyFour={false}
              digitalClock={false}
              fontFamily={'DIGITALDREAMFAT'}
              dimension={30}
            />
            <Clock
              twentyFour={false}
              digitalClock={false}
              fontFamily={'DIGITALDREAMFAT'}
              dimension={30}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}
