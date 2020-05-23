import React, {Component} from 'react';
import {SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';
import {Clock} from './components';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1}}>
            <Clock
              style={styles.clock}
              twentyFour={true}
              color={'#8B0000'}
              digitalClock={true}
              fontFamily={'DIGITALDREAMFAT'}
              country={'Europe/Rome'}
              dimension={50}
            />
            <Clock
              style={styles.clock}
              twentyFour={false}
              digitalClock={false}
              fontFamily={'DIGITALDREAMFAT'}
              country={'Europe/Paris'}
              dimension={40}
            />
            <Clock
              fullDate
              style={styles.clock}
              twentyFour={false}
              digitalClock={false}
              country={'America/New_York'}
              fontFamily={'DIGITALDREAMFAT'}
              dimension={30}
            />
            <Clock
              style={styles.clock}
              twentyFour={false}
              digitalClock={false}
              country={'America/Los_Angeles'}
              fontFamily={'DIGITALDREAMFAT'}
              dimension={40}
            />
            <Clock
              style={styles.clock}
              twentyFour={true}
              digitalClock={false}
              country={'Asia/Shanghai'}
              fontFamily={'DIGITALDREAMFAT'}
              dimension={50}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  clock: {
    marginTop: 20,
  },
});
